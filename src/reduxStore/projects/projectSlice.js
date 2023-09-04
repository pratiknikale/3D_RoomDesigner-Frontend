import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const initialState = {
    projectList: [],
    currentProjectDetails: {},
};

export const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjectList: (state, { payload }) => {
            state.projectList = payload;
        },
        newProject: (state, { payload }) => {
            return { ...state, projectList: [payload, ...state.projectList] };
        },
        deleteProjectRedux: (state, { payload }) => {
            console.log("deleteProjectRedux run ::: ")
            state.projectList = state.projectList.filter((proj, i) => {
                return proj._id !== payload
            })
        },
        setCurrentProjectDetails: (state, { payload }) => {
            state.currentProjectDetails = payload;
        },
        updateFloorDetails: (state, { payload }) => {
            console.log("updateFloorDetails:::", payload)
            switch (payload.name) {
                case "width":
                    state.currentProjectDetails.elements.Floor.width = payload.value;
                    break;
                case "length":
                    state.currentProjectDetails.elements.Floor.length = payload.value;
                    break;
                case "floorMaterial":
                    state.currentProjectDetails.elements.Floor["material"] = payload.value;
                    break;
            }

        },
        createWall: (state, { payload }) => {
            state.currentProjectDetails.elements[`${payload.name}`].push(payload.value);
            // return { ...state.currentProjectDetails.elements, Wall: [payload, ...state.currentProjectDetails.elements.Wall] }
            // return { ...state, currentProjectDetails: { ...state.currentProjectDetails, elements: { ...state.currentProjectDetails.elements, Wall: [payload.value, ...state.currentProjectDetails.elements.Wall] } } }
        },
        updateWallDetails: (state, { payload }) => {
            switch (payload.name) {
                case "height":
                    state.currentProjectDetails.elements.Wall.forEach((wall, i) => {
                        wall.height = parseInt(payload.value);
                    })
                    break;
                case "wallMaterial":
                    state.currentProjectDetails.elements.Wall[payload.index].material = payload.value;
                    break;
                case "wallArrayOnSave":
                    state.currentProjectDetails.elements.Wall = payload.value;
                    break;
                case "visible":
                    state.currentProjectDetails.elements.Wall[payload.index].visible = !state.currentProjectDetails.elements.Wall[payload.index].visible;
                    break;
                case "color":
                    state.currentProjectDetails.elements.Wall[payload.index].color = payload.value;
                    break;
                case "newWallElement":
                    state.currentProjectDetails.elements.Wall[payload.index].subElements.push(payload.value);
                    // return { ...state, currentProjectDetails: { ...state.currentProjectDetails, elements: { ...state.currentProjectDetails.elements, Wall: [...state.currentProjectDetails.elements.Wall, [payload.index]: {}] } } }
                    break;
            }
        },
        updateWallElement: ((state, { payload }) => {
            switch (payload.name) {
                case "height":
                    state.currentProjectDetails.elements.Wall[payload.wallIndex].subElements[payload.index].height = payload.value;
                    break;
                case "length":
                    state.currentProjectDetails.elements.Wall[payload.wallIndex].subElements[payload.index].length = payload.value;
                    break;
                case "width":
                    state.currentProjectDetails.elements.Wall[payload.wallIndex].subElements[payload.index].width = payload.value;
                    break;
                case "positionX":
                    state.currentProjectDetails.elements.Wall[payload.wallIndex].subElements[payload.index].positionX = payload.value;
                    break;
                case "positionY":
                    state.currentProjectDetails.elements.Wall[payload.wallIndex].subElements[payload.index].positionY = payload.value;
                    break;
                case "positionZ":
                    state.currentProjectDetails.elements.Wall[payload.wallIndex].subElements[payload.index].positionZ = payload.value;
                    break;
            }
        })
    }
});

export const {
    setProjectList,
    newProject,
    deleteProjectRedux,
    setCurrentProjectDetails,
    updateFloorDetails,
    createWall,
    updateWallDetails,
    updateWallElement
} = projectSlice.actions;

export default projectSlice.reducer;
