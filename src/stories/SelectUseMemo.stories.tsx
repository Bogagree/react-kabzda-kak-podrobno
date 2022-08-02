import React, {useMemo, useState} from "react";
import {ItemsType, Select} from "../Components/Select/Select";
import {ComponentMeta} from "@storybook/react";

export default {
    title: 'Select_useMemo',
    component: Select,
} as ComponentMeta<typeof Select>

const itemsForSelect = [
    {title: 'Minsk', value: 1, population: 5000000},
    {title: 'Moscow', value: 2,population: 20000000},
    {title: 'Taganrog', value: 3,population: 300000},
    {title: 'Pattaya', value: 4, population: 200000}
]

export const Select_useMemo_example = () => {

    const [value, setValue] = useState(2)
    const [towns, setTowns] = useState(itemsForSelect)

    const newItems = useMemo( ()=>{
        return towns.filter( town => town.population > 1000000)
    }, [towns])

    const addTown = () => {
        console.log('Town added')
        return setTowns([...newItems, {title: 'Rostov', value: 4, population: 1000001}])
    }

    return <>
        <button onClick={addTown}>add town</button>
        <Select value={value}
                onChange={setValue}
                items={newItems}
        />
    </>
};