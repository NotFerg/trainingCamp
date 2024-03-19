const validateRequest = (data) => {
  const retData = { isValid: true, errors: {} };
  const nameRegex = /^[a-zA-Z]+$/;

  // Client Validation
  if (!data?.client || data?.client.trim().length === 0) {
    retData.isValid = false;
    retData.errors.client = "Client required.";
  } else if (
    ![
      "TechByte Innovations",
      "GreenLeaf Organics",
      "MetroStyle Apparel",
      "AquaTech Solutions",
      "BioHarvest Farms",
    ].includes(data?.client)
  ) {
    retData.isValid = false;
    retData.errors.client =
      "Only choose from TechByte Innovations, GreenLeaf Organics, MetroStyle Apparel, AquaTech Solutions, and BioHarvest Farms";
  }

  // Project Validation
  if (!data?.project || data?.project.trim().length === 0) {
    retData.isValid = false;
    retData.errors.project = "Project required.";
  } else if (
    ![
      "People System Upgrade",
      "Books Integration",
      "Warehouse Automation",
    ].includes(data?.project)
  ) {
    retData.isValid = false;
    retData.errors.project =
      "Only choose from People System Upgrade, Books Integration, and Warehouse Automation";
  }

  if (data?.subject?.length < 1 && !nameRegex.test(data?.subject)) {
    retData.isValid = false;
    retData.errors.subject = "Subject is required.";
  }

  if (data?.description.length < 1 && !nameRegex.test(data?.description)) {
    retData.isValid = false;
    retData.errors.description = "Description is required.";
  }

  return retData;
};

export { validateRequest };
