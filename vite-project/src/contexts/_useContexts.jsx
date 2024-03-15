import { useContext } from "react";
import { CompanyContext } from "./Company";
import {ResourceContext} from "./Resources"
import { ProjectContext } from "./Projects";

const useCompany = () => useContext(CompanyContext)
const useResource = () => useContext(ResourceContext)
const useProject = () => useContext(ProjectContext)

export {useCompany,useResource,useProject};