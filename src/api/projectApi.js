import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_BASE_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("3D-designerProfile")) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("3D-designerProfile")).token}`;
    }
  
    return req;
  });

export const getProjectList = async () => {
    try {
        const projectList = await API.get("/projects/allProjectList", { withCredentials: true });
        return projectList;
    } catch (err) {
        console.log("smething went wrong in get projectlist:::: ", err)
    }
}

export const newProject = async (data) => {
    try {
        const newProject = await API.post("/projects/newProject", data, { withCredentials: true });
        return newProject;
    } catch (error) {
        return { error: true, message: error.response?.data?.message };
    }
};

export const deleteProject = async (id) => {
    try {
        const delProj = await API.delete(`/projects/deleteProject/${id}`);
        return delProj;
    } catch (err) {
        console.log("something went wrong with delete project::::: ", err)
    }
}

export const getSelectedProjDetails = async (id) => {
    try {
        const resultData = await API.get(`/projects/getSelectedProjDetails/${id}`, { withCredentials: true });
        return resultData;
    } catch (err) {
        console.log("something went wrong with getSelectedProjDetails::::: ", err)
    }
}