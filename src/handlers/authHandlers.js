import { signup, login, logOut } from "../api/api";
import { logoutUser, setLoggedUser } from "../reduxStore/user/userSlice";
import { setProjectList } from "../reduxStore/projects/projectSlice";

const signinFieldHandler = (e, signupData, setSignupData) => {
  e.preventDefault();
  setSignupData({ ...signupData, [e.target.name]: e.target.value });
};
const loginFieldHandler = (e, loginData, setLoginData) => {
  e.preventDefault();
  setLoginData({ ...loginData, [e.target.name]: e.target.value });
};

const submitSignup = async (e, signupData, messageOpen, setMessageOpen, navigate, dispatch,setLoading) => {
  e.preventDefault();
  setLoading(true)
  await signup(signupData, navigate).then((result) => {
    if (result.error) {
      setMessageOpen({ show: true, status: "failed", message: result.message });
      setTimeout(() => {
        setMessageOpen({ ...messageOpen, status: "failed", show: false });
      }, 4000);
    } else {
      // dispatch(setLoggedUser(result.data));
      setMessageOpen({ show: true, status: "success", message: "Successfully created new account and loggedIn" });
      dispatch(setLoggedUser(result.data));
      setTimeout(() => {
        setMessageOpen({ ...messageOpen, status: "success", show: false });
      }, 4000);
    }
  }).finally(()=>{
    setLoading(false);
  });
};
const loginSubmit = async (e, loginData, messageOpen, setMessageOpen, navigate, dispatch, setLoading) => {
  e.preventDefault();
  setLoading(true);
  await login(loginData, navigate).then((result) => {
    if (result.error) {
      setMessageOpen({ show: true, status: "failed", message: result.message });
      setTimeout(() => {
        setMessageOpen({ ...messageOpen, status: "failed", show: false });
      }, 4000);
    } else {
      // dispatch(setLoggedUser(result.data));
      setMessageOpen({ show: true, status: "success", message: "Successfully LoggedIn" });
      dispatch(setLoggedUser(result.data));
      setTimeout(() => {
        setMessageOpen({ ...messageOpen, status: "success", show: false });
      }, 4000);
    }
  }).finally(()=>{
    setLoading(false);
  });
};



const logout = async (e, dispatch, navigate) => {
  e.preventDefault();
  localStorage.clear("3D-designerProfile");
  dispatch(logoutUser());
  // let res = await logOut();
  // if (res.statusText == "OK") {
  dispatch(setProjectList([]))
  navigate("/");
  // }
};

export { signinFieldHandler, loginFieldHandler, submitSignup, loginSubmit, logout };
