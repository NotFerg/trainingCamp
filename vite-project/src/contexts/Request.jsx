import { createContext, useEffect, useRef, useReducer } from "react";
import PropTypes from "prop-types";
import mockApi from "../utils/mockApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialData = {
  isEditing: false,
  data: {
    client: "",
    project: "",
    subject: "",
    description: "",
  },
  formData: {
    client: "",
    project: "",
    subject: "",
    description: "",
  },
};

const reducer = (state, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case "FETCHED":
      return { ...state, formData: payload.data, data: payload.data };
    case "RESET_DATA":
      return { ...state, formData: state.data };
    case "SET_EDIT": {
      return { ...state, isEditing: payload.isEditing };
    }
    case "ON_INPUTCHANGE": {
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: payload.value },
      };
    }
    default:
      return state;
  }
};

export const RequestContext = createContext("default");

export const RequestProvider = ({ id = "add", children }) => {
    const navigate = useNavigate();
  const [state,dispatch] = useReducer(reducer,initialData);
  const fetched = useRef(-1);

  const handleAddRequest = (data) => {
    let method = "POST";
    let endpoint = "/requests";

    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/requests/${data?.id}`;
    }

    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = {} } = requestData; 

    if (status) {
      if (!data?.id > -1) {
        Swal.fire({
          title: "Request Added",
          text: "Succesfully added request",
          icon: "success",
        });
        // navigate(`/resource/${newData?.id}`);
        navigate("/requests");
      } else {
        Swal.fire({
          title: "Request Updated",
          text: "Succesfully updated request",
          icon: "success",
        });
        dispatch({type: "FETCHED",data:newData})
      }
      dispatch({type:"SET_EDIT", isEditing:false});
    }
  };

  const handleDeleteRequest = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted Request!",
          text: "Your Resource has been deleted.",
          icon: "success",
        });
        mockApi("DELETE", `/requests/${id}`);
        navigate("/requests");
      }
    });
  };

  const handleCancel = () => {
    if(id === "add"){
      navigate("/requests")
    }
    dispatch({type:"SET_EDIT", isEditing:false});
    dispatch({type:"RESET_DATA"})
  };

  useEffect(() => {
    if (id === "add") {
      dispatch({type:"SET_EDIT",isEditing:true})
      return;
    }
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/requests/${id}`);
    const { status = false, data = {} } = requestData;
    if (status) {
      fetched.current = id;
      dispatch({type: "FETCHED",data})
     
    }
  }, [id]);

  return (
    <RequestContext.Provider
      value={{
        id,
        ...state,
        dispatch,
        handleAddRequest,
        handleDeleteRequest,
        handleCancel,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

RequestProvider.proptypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.any,
};

export default RequestProvider;
