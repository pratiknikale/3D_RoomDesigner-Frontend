import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_BASE_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("3D-designerProfile")) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("3D-designerProfile")).token}`;
    }
  
    return req;
  });

export const updateFloor = async (id, length, width, material) => {
    try {
        const updatedFloor = await API.put("/elements/updateFloor", { floorID: id, length: length, width: width, material: material }, { withCredentials: true });
        return updatedFloor;
    } catch (err) {
        console.log("smething went wrong in get projectlist:::: ", err)
    }
}

export const updateWall = async (Walls, projectID) => {
    try {
        const updateWall = await API.put("/elements/updateWall", { walls: Walls, projectID: projectID }, { withCredentials: true })
        return updateWall;
    } catch (err) {
        console.log("somethong went wrong with saving wall details api call::: ", err)
    }
}