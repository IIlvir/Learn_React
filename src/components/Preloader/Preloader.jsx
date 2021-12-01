import React from "react";
import css from "./Preloader.module.css";
import preloader from "../../Images/preloader.gif"

const Preloader = () => {
    return(
        <div className={css.preloader}>
            <img src={preloader} alt="Loading" width="50px" height="50px" />
        </div>
    );
};

export default Preloader;