import React from 'react';

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

const Star_Dimych = (props: StarPropsType) => {
    const style = {
        marginLeft: "5px"
    }

    return (
        <span style={style} onClick={ () => {props.setValue(props.value)}}>{props.selected ? <b>Star</b> : "Star"}</span>
    )
};

export default Star_Dimych;