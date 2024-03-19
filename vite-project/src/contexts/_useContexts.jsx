import { useContext } from "react";
import { CompanyContext } from "./Company";
import {ResourceContext} from "./Resources"
import { ProjectContext } from "./Projects";
import { RequestContext } from "./Request";

const useCompany = () => useContext(CompanyContext)
const useResource = () => useContext(ResourceContext)
const useProject = () => useContext(ProjectContext)
const useRequest = () => useContext(RequestContext);

export {useCompany,useResource,useProject,useRequest};