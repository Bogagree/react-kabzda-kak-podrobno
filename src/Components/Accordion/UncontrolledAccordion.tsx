import React, {useReducer} from 'react';
import {ItemType} from "./Accordion";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitle = {
    title: string
    onClick: () => void
}

const Accordion = (props: AccordionPropsType) => {
    console.log("Uncontrolled Accordion rendering")
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type:'TOGGLE-COLLAPSED'})}}/>

            { !state.collapsed && <AccordionBody/>}
        </>
    );
};


const AccordionTitle = (props: AccordionTitle) => {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={( ) => {props.onClick()} }>-- {props.title} --</h3>
    )
}

const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;