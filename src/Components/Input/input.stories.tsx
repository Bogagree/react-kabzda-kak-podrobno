import React, {ChangeEvent, useRef, useState} from 'react';
import OnOff from "../OnOff/OnOff";
import {ComponentMeta} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    component: OnOff,
} as ComponentMeta<typeof OnOff>

// const Template = (arg:string) => <OnOff {...arg}/>

export const UncontrolledInput = () => <input/>;

export const TrackValueOFUncontrolledInput = () => {

    const [value, setValue] = useState('')
    return <> <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/> {value} </>
}

export const GetValueOFUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        --actual value: {value} </>
}

export const ControlledInputFixedValue = () => <input value={'IT-Incubator.by'}/>;


export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)


    return <input type="checkbox" checked={parentValue} onChange={action('want changes')}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')


    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Taganrog</option>
    </select>
}
