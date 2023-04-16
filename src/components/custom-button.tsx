import React from 'react';
import style from "./custom-style.module.css";

interface ICustomButton  {
    props: string
}
function CustomButton({props}:ICustomButton) {
    return (
        <button className={style.formButton} type="submit">{props}</button>
    );
}

export {CustomButton};
