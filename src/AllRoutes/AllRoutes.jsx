
import { Routes, Route } from "react-router-dom";
import Join from "../pages/Join";
import { Login } from "../pages/Login";
import SignIn from "../pages/SignIn";
import { Women } from "../pages/Women";
import { Men } from "../pages/Men";
import Admin from "../pages/Admin";
import Adminorders from "../pages/Adminorders";
import Admincustomers from "../pages/Admincustomers";
import Adminproductsmen from "../pages/Adminproductsmen";
import AdminAddProductMen from "../pages/AdminAddProductMen";


export default function AllRoutes() {
    return (
        <Routes>
          
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/" element={<Women></Women>}></Route>
            <Route path="/men" element={<Men></Men>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/adminorders" element={<Adminorders/>}></Route>
            <Route path="/admincustomers" element={<Admincustomers/>}></Route>
            <Route path="/adminproductmen" element={<Adminproductsmen/>}></Route>
            <Route path="adminaddproductmen" element={<AdminAddProductMen/>}></Route>
        </Routes>
    )

}