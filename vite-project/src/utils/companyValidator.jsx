const validateCompany = (data) => {
    const retData = {isValid:true,errors:{} };
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(09|639)\d{9}$/;

    if(data.name?.length < 1 && !nameRegex.test(data?.name)){
        retData.isValid = false;
        retData.errors.name="Name is invalid.";
    }

    if(data.address?.length < 1 && !nameRegex.test(data?.address)){
        retData.isValid = false;
        retData.errors.address="Address is invalid.";
    }

    if(data.contactPerson?.length < 1 && !nameRegex.test(data?.contactPerson)){
        retData.isValid = false;
        retData.errors.contactPerson="Contact Person is invalid.";
    }

    if (!data.email) {
        retData.isValid = false;
        retData.errors.email = "Email is required.";
    } else if (!emailRegex.test(data.email)) {
        retData.isValid = false;
        retData.errors.email = "Email is invalid.";
    }
    
    if (!data.contactNumber) {
        retData.isValid = false;
        retData.errors.contactNumber = "Contact number is required.";
    } else if (!phoneRegex.test(data.contactNumber)) {
        retData.isValid = false;
        retData.errors.contactNumber = "Contact number is invalid.";
    }
    return retData;
}

export {validateCompany}