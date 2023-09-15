import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import Desktop from "../pages/desktop";

const RoutesHOC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/HomePage" Component={HomePage}></Route>
                <Route path = "/Desktop" Component={Desktop}></Route>
                <Route exact path = "/" Component={HomePage}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesHOC