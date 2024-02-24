import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";


import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames";

const App = () => {
    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames("app",{},[theme])}>
            <button onClick={()=>{
                toggleTheme()
            }}>
                click
            </button>
            <Link to="/about">aboutPage</Link>
            <Link to="/about">mainPage</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                        <Route path="/about" element={<AboutPage/>}>

                        </Route>
                        <Route path="/" element={<MainPage/>}>

                        </Route>

                </Routes>
            </Suspense>
        </div>
    );
};

export default App;