import React, {useState} from 'react';
import {ComponentMeta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>

const itemsForAccordion = [
    {title: 'Dimych', value: 1},
    {title: 'Artem', value: 2},
    {title: 'Valera', value: 3},
    {title: 'Viktor', value: 4}
]

const callback = action('accordion mode changed')

const onClickCallback = action('some item was clicked')

const MemoAccordion = React.memo(Accordion)

export const MenuCollapsedMode = () => <MemoAccordion titleValue={'Menu'}
                                                      onClick={onClickCallback}
                                                      onChange={callback}
                                                      collapsed={false}
                                                      items={[]}/>;

export const UserUncollapsedMode = () => <MemoAccordion titleValue={'Users'}
                                                        onClick={onClickCallback}
                                                        onChange={callback}
                                                        collapsed={true}
                                                        items={itemsForAccordion}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState(false)

    return <MemoAccordion titleValue={'-Users-'}
                          onClick={(id) => alert(`user with ID: ${id} should be happy`)}
                          onChange={() => setValue(!value)}
                          collapsed={value}
                          items={itemsForAccordion}
    />;
}


const MemoUncontrolledAccordion = React.memo(UncontrolledAccordion)

export const ModeChangingForUncontrolledAccordion = () => {
    const [value, setValue] = useState(false)

    return <MemoUncontrolledAccordion titleValue={'-Users-'}
                                      onClick={(id) => alert(`user with ID: ${id} should be happy`)}
                                      onChange={() => setValue(!value)}
                                      collapsed={value}
                                      items={itemsForAccordion}
    />;
}