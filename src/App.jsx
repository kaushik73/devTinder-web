import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/layout/Body";
import Login from "./components/pages/Login";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Feed from "./components/pages/Feed";
import SignUp from "./components/pages/SignUp";
import Connections from "./components/pages/Connections";
import Requests from "./components/pages/Requests";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
