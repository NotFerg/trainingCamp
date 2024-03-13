const validateResource = (data) => {
    const retData = {isValid:true,errors:{} };
    const nameRegex = /^[a-zA-Z]+$/;

    if(data.firstName?.length < 1 && !nameRegex.test(data?.firstName)){
        retData.isValid = false;
        retData.errors.firstName="First Name is invalid.";
    }

    if(data?.lastName?.length <1 && !nameRegex.test(data?.lastName)){
        retData.isValid = false;
        retData.errors.lastName="last Name is required.";
    }

    if(data?.type?.length <1 && !nameRegex.test(data?.type)){
        retData.isValid = false;
        retData.errors.type="Resource Type required.";
    } else{
        if (!["DEV","QA","PM"].includes(data?.type)){
            retData.isValid = false;
            retData.errors.type="Only Choose From DEV,QA and PM";
        }
    }

    return retData;
}

export {validateResource}