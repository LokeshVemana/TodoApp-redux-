import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import SignInForm from "./FuncComp/signupForm";
// import ListOfItems from "./FuncComp/ListFunc";
// import Class1 from "./ClassComp/Class1";
// import Func from "./FuncComp/Func";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterComponenet from "./RouterComponenet";
import App from "./App"
import Counti from "./Counti";
// import ComponentA from "./Components/ComponentA";
// import { createContext } from "react";

// import { BrowserRouter ,Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Career from "./pages/career";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Navebar from "./pages/Navebar";
// import Nopage from "./pages/Nopage";
// import ToDoList from "./pages/TodoList";

// import ToDoList from "./App";

// export const ComponentContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
     {/* <Counti/> */}



<App/>
   {/* <RouterComponenet/> */}

    {/* <ComponentContext.Provider value={{ name: "Nani" }}>
     
      <ComponentA />
    </ComponentContext.Provider> */}

    {/* <ListOfItems/>
    <Class1/> */}
    {/* <SignInForm/> */}
    {/* <Loki /> */}
    {/* <Func name="Nani" age="24" /> */}

{/* //     <BrowserRouter>
// <Navebar/>
// <Routes>
//   <Route path="/Home" element={<Home/>}/>
//   <Route path="/About" element={<About/>}/>
//   <Route path="/Career" element={<Career/>}/>
//   <Route path="/ToDo" element={<ToDoList/>}/>
//   <Route path="/contact" element={<Contact/>}/>
//   <Route path="/login" element={<Login/>}/>
//   <Route path="/signup" element={<Signup/>}/>
//   <Route path="*" element={<Nopage/>}/>
// </Routes>
// </BrowserRouter> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
