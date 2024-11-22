import "./App.css";
import { useState, forwardRef, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "./pages/layOuts/Header";
import ProtectedRoute from "./pages/Auth/protectedRoutes";

const Auth = lazy(() => import("./pages/Auth"));
const DesignerPage = lazy(() => import("./pages/DesignerPage"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));

// color comb
// 1. #659DBD
// 2. #8D8741
// 3. #DAAD86
// 4. #BC986A
// 5. #FBEEC1
// background: rgb(21, 80, 113);
// background: linear - gradient(155deg, rgba(21, 80, 113, 1) 0 %, rgba(101, 157, 189, 1) 59 %, rgba(101, 157, 189, 1) 100 %);

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [messageOpen, setMessageOpen] = useState({ show: false, status: "", message: "" });
  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={messageOpen.show} autoHideDuration={6000}>
          <Alert severity={messageOpen.status === "failed" ? "error" : "success"} sx={{ width: "100%" }}>
            {messageOpen.message}
          </Alert>
        </Snackbar>
      </Stack>
      <BrowserRouter>
        <Header />
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(155deg, rgba(21, 80, 113, 1)0%, rgba(101, 157, 189, 1)59%, rgba(101, 157, 189, 1)100%)",
          }}
        >
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route exact path="/" element={<Auth setMessageOpen={setMessageOpen} messageOpen={messageOpen} />} />
              <Route element={<ProtectedRoute />}>
                <Route exact path="/DashboardPage" element={<DashboardPage />} />
                <Route exact path="/DesignerPage/:id" element={<DesignerPage />} />
              </Route>
            </Routes>
          </Suspense>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
