import React from "react";
import About from "../about/About"
import Testimonials from "../testimonials/Testimonials";

import "./Content.css";


function Content (){
    return (
        <div className="Content">
            <About />
            <Testimonials />
        </div>
    )
}

export default Content