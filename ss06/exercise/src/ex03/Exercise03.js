import React from "react";
import {Route, Routes} from 'react-router-dom';
import PhoneBook from "./PhoneBook";
import CreateNew from "./CreateNew";

export default function Exercise03() {

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<PhoneBook/>}/>
                <Route path={"/contact/add"} element={<CreateNew/>}/>
                {/*<Route path={"/contact/:id"} element={<CreateNew/>}/>*/}
            </Routes>
        </div>
    )

}
