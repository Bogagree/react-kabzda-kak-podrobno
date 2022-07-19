import React, {useState} from 'react';
import {ComponentMeta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>

const callback = action('select mode changed')

const itemsForSelect = [
    {title: 'Minsk', value: 1},
    {title: 'Moscow', value: 2},
    {title: 'Taganrog', value: 3},
    {title: 'Pattaya', value: 4}
]

const onClickCallback = action('some item was clicked')

export const WithValueMode = () => {

    const [value, setValue] = useState(2)

    return <>
        <Select value={value}
                onChange={setValue}
                items={itemsForSelect}
        />
    </>
}
export const WithoutValueMode = () => {

    const [value, setValue] = useState(0)

    return <>
        <Select
            value={value}
            onChange={setValue}
            items={itemsForSelect}
        />
    </>
}