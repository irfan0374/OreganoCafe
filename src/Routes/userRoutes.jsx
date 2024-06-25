import React from "react"
import {Routes,Route}from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Juices_shakes from "../Pages/Juices_shakes"
import ListPage from "../Pages/ListPage"
import DetailPage from "../Pages/DetailPage"
import JuiceShakeList from "../Pages/juces_shakes_list"
import Wishlist from "../Components/wishlist"



const userRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/juice" element={<Juices_shakes/>}/>
            <Route path="/listPage/:category?" element={<ListPage/>}/>
            <Route path="/DetailPage" element={<DetailPage/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/juiceShakeList/:category" element={<JuiceShakeList/>}/>

        </Routes>
        </>

    )
}
export default userRoutes