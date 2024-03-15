import { createContext, useEffect, useRef, useReducer } from "react";
import PropTypes from "prop-types";
import mockApi from "../utils/mockApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialData = {
  isEditing: false,
  data: {
    name: "",
    address: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
  },
  formData: {
    name: "",
    address: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
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

export const ResourceContext = createContext("default");

export const ResourceProvider = ({ id = "add", children }) => {
    const navigate = useNavigate();
  const [state,dispatch] = useReducer(reducer,initialData);
  const fetched = useRef(-1);

  const handleAddResources = (data) => {
    let method = "POST";
    let endpoint = "/resources";

    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/resources/${data?.id}`;
    }

    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = {} } = requestData; //data: newData = {}

    if (status) {
      if (!data?.id > -1) {
        Swal.fire({
          title: "Resource Added",
          text: "Succesfully added resource",
          icon: "success",
        });
        // navigate(`/resource/${newData?.id}`);
        navigate("/resources");
      } else {
        Swal.fire({
          title: "Resource Updated",
          text: "Succesfully updated resource",
          icon: "success",
        });
        dispatch({type: "FETCHED",data:newData})
      }
      dispatch({type:"SET_EDIT", isEditing:false});
    }
  };

  const handleDeleteResources = () => {
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
          title: "Deleted Resource!",
          text: "Your Resource has been deleted.",
          icon: "success",
        });
        mockApi("DELETE", `/resources/${id}`);
        navigate("/resources");
      }
    });
  };

  const handleCancel = () => {
    if(id === "add"){
      navigate("/resources")
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
    const requestData = mockApi("GET", `/resources/${id}`);
    const { status = false, data = {} } = requestData;
    if (status) {
      fetched.current = id;
      dispatch({type: "FETCHED",data})
     
    }
  }, [id]);

  return (
    <ResourceContext.Provider
      value={{
        id,
        ...state,
        dispatch,
        handleAddResources,
        handleDeleteResources,
        handleCancel,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

ResourceProvider.proptypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.any,
};

export default ResourceProvider;
