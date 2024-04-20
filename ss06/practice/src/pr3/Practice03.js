import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Users from "./Users";
import UserDetails from "./UserDetails";

export default function Practice03() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Users/>}/>
                    <Route path={"/user/add"} element={<UserDetails/>}/>
                    <Route path={`/user/:userId`} element={<UserDetails/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}