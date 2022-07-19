import React, {useState} from 'react';
import style from './OnOff_2.module.css'

type OnOff_2PropsType = {
    isOn: boolean
    callback: () => void
}

const OnOff_2 = (props: OnOff_2PropsType) => {

    const [isOn, setIsOn] = useState(false) //для неконтроллируемой компоненты

    const onStyle = {
        display: "flex",
        alignItems: "center",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "5px",
        background: props.isOn ? "green" : "white"
    }
    const offStyle = {
        display: "flex",
        alignItems: "center",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "5px",
        background: props.isOn ? "white" : "red"
    }
    const lampStyle = {
        display: "flex",
        alignItems: "center",
        width: "35px",
        height: "35px",
        border: "1px solid black",
        padding: "5px",
        borderRadius: "50%",
        background: props.isOn ? "green" : "red"
    }


    function onClickHandler() {
        setIsOn(!isOn)
    } // для неконтроллируемой компоненты

    return (
        <div className={style.wrapper}>
            <div style={onStyle} onClick={props.callback}>ON</div>
            <div style={offStyle} onClick={props.callback}>OFF</div>
            <div style={lampStyle}>lamp</div>
        </div>
    );
};

export default OnOff_2;