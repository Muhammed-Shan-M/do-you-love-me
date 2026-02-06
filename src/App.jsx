
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Yes } from "./pages/Yes";
import { No1 } from "./pages/No1";
import { No2 } from "./pages/No2";
import { No3 } from "./pages/No3";
import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Guard } from "./Guard/Guard";


export const App = () => {


  return (

    <Guard>
      <Routes>
        <Route path="/home/:name" element={<Home />} />
        <Route path="/no1" element={<No1 />} />
        <Route path="/no2" element={<No2 />} />
        <Route path="/no3" element={<No3 />} />
        <Route path="/finaly" element={<Yes />} />
      </Routes>
    </Guard>

  )
}
