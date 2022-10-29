import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SubCategory from "../pages/SubCategory";

export default function App() {

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:subCategory" element={<SubCategory />}/>
      </Routes>
    </div>
  );
}

//API-Key == 4d15ab0c37164629a49726604ab9f6c6

// Endpoint == https://newsapi.org/v2/everything?q=bitcoin&apiKey=4d15ab0c37164629a49726604ab9f6c6
