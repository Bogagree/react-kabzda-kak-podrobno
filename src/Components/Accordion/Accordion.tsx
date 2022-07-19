import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export type ItemType = {
    title: string
    value: any
}

const Accordion = (props: AccordionPropsType) => {

    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={() => {
                props.onChange(!props.collapsed)
            }}/>

            {props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
};

type AccordionTitle = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitle) => {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={ () => {props.onClick(i.value)} } key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion;