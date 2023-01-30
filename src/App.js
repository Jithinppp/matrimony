import { Route, Routes } from "react-router-dom";
// components and routes
import Navigation from "./components/Navigation/Navigation..component.jsx";
import About from "./routes/about/about";
import Admin from "./routes/admin/admin";
import Home from "./routes/home/home";
import SignIn from "./routes/sign-in/sign-in";
import SignUp from "./routes/sign-up/sign-up";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
