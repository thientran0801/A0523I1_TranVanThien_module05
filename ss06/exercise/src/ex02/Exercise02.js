import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BookManagement from "./BookManagement";
import CreateBook from "./CreateBook";
export default function Exercise02() {
    return (
            <Routes>
                <Route path={"/"} element={<BookManagement />} />
                <Route path={"/create"} element={<CreateBook />} />
            </Routes>
    )
}