import React from "react";
import s from './FrendItem.module.css'

const FrendItem = (props) => {
    return(
        <li className={s.frendItem}>
            <div>
                <img src="../../../../Image/Cat.png" alt="cat" />
                <h3>Иванов Иван</h3>
            </div>
        </li>
    );
};

export default FrendItem;