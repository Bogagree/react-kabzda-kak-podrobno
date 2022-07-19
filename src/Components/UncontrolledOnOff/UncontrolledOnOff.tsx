import React, {useState} from 'react';


type OnOffPropsType = {
    onChange: (on: boolean) => void
}

const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "3px",
        background: on ? "green" : "white"
    }
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "3px",
        padding: "3px",
        background: on ? "white" : "red"
    }
    const lampStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "15px",
        marginLeft: "3px",
        background: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(!on)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div
                style={onStyle}
                onClick={onClicked}>On
            </div>
            <div
                style={offStyle}
                onClick={offClicked}>Off
            </div>
            <div style={lampStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;