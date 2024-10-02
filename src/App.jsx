import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/profile" element={<div>profile Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
