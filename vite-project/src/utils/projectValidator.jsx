const validateProject = (data) =>{
    const retData = {isValid:true,errors:{} };
    const nameRegex = /^[a-zA-Z]+$/;

    if(data.name?.length < 1 && !nameRegex.test(data?.name)){
        retData.isValid = false;
        retData.errors.name="Name is invalid.";
    }

    if (data.alias) {
        if (!nameRegex.test(data.alias)) {
            retData.isValid = false;
            retData.errors.alias = "Alias should only contain letters and no spaces.";
        } else if (data.alias.includes(" ")) {
            retData.isValid = false;
            retData.errors.alias = "Alias should not contain spaces.";
        }
    } else {
        retData.isValid = false;
        retData.errors.alias = "Alias is required.";
    }

    if(data.description?.length < 1 && !nameRegex.test(data?.description)){
        retData.isValid = false;
        retData.errors.description="description is invalid.";
    }

    return retData;

}
export {validateProject}