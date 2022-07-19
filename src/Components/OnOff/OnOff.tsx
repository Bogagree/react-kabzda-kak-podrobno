import React from 'react';

type SwitcherPropsType = {
    isOn: boolean
    switcherCallback: (isOn: boolean) => void
}

const OnOff = (props: SwitcherPropsType) => {

    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "3px",
        background: props.isOn ? "green" : "white"
    }
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "3px",
        padding: "3px",
        background: props.isOn ? "white" : "red"
    }

    const lampStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "15px",
        marginLeft: "3px",
        background: props.isOn ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => {props.switcherCallback(!props.isOn)}}>On</div>
            <div style={offStyle} onClick={ () => {props.switcherCallback(!props.isOn)}}>Off</div>
            <div style={lampStyle}></div>
        </div>
    );
};

export default OnOff;