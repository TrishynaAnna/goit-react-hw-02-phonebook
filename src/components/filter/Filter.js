import React from "react";
import style from "./Filter.module.css"

const Filter = ({filterContact}) => {
    return (
        <>
            <h2>Find contacts by name</h2>
            <input type="text" className={style.input} onChange={filterContact}/>
        </>
    );
};

export default Filter;
