import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import الصفحة_الرئيسية from "../Pages/الصفحة _الرئيسية/الصفحة _الرئيسية"
import للتواصل_معنا from "../Pages/للتواصل/للتواصل"
import التحاليل from "../Pages/التحاليل/التحاليل"
import باقات_الصحة_لكل_العيلة from "../Pages/باقات_الصحة_لكل_العيلة/باقات_الصحة_لكل_العيلة.jsx"
import تدريب from "../Pages/تدريب/تدريب"
import خدماتنا from "../Pages/خدماتنا/خدماتنا"
import عن_معامل_مكة from "../Pages/عن_معامل_مكة/عن_معامل_مكة"
import الزيارة_المنزلية from "../Pages/الزيارة_المنزلية/الزيارة_المنزلية"
import { useEffect } from "react"
// import PrivacyPolicies from "../Pages/Returns"
// import Shop from "../../src/Pages/Shop/Shop"
// import SingleProduct from "../../src/Pages/SingleProduct/SingleProduct"
// import CategoriesProduct from "../Pages/CategoriesProduct/CategoriesProduct"
// import ElectroniCategory from "../Pages/ElectronicCategory/ElectroniCategory"
// import WomensClothesCategory from "../Pages/WomenClothesCategory/WomenClothesCategory"
// import MensClothesCategory from "../Pages/MensClothesCategory/MensClothesCategory"
// import JeweleryCategory from "../Pages/JeweleryCategory/JeweleryCategory"
// import Cart from "../../src/Pages/Cart/Cart"




function Routing() {
 
 
    return (
        <BrowserRouter>
   
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<الصفحة_الرئيسية />} ></Route>
                    <Route path="/الصفحة_الرئيسية" element={<الصفحة_الرئيسية />} ></Route>
                    <Route path="/للتواصل_معنا" element={< للتواصل_معنا />}></Route>
                    <Route path="/التحاليل" element={<التحاليل />} ></Route>
                     <Route path="/باقات_الصحة_لكل_العيلة" element={<باقات_الصحة_لكل_العيلة />} ></Route>
                    <Route path="/تدريب" element={<تدريب/>}></Route>
                   <Route path="/خدماتنا" element={<خدماتنا />} ></Route>
                     <Route path="/عن_معامل_مكة" element={<عن_معامل_مكة />} ></Route>
                    <Route path="/الزيارة_المنزلية" element={<الزيارة_المنزلية />} ></Route>
                    {/* <Route path="/privacypolicies" element={<PrivacyPolicies />} ></Route>
                    <Route path="/ElectroniCategory" element={<ElectroniCategory />} ></Route>
                    <Route path="/JeweleryCategory" element={<JeweleryCategory />} ></Route>
                    <Route path="/MensClothesCategory" element={<MensClothesCategory />} ></Route>
                    <Route path="/WomensClothesCategory" element={<WomensClothesCategory />} ></Route> */}
                    <Route path="*" element={<Navigate to="/" />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )

}
export default Routing