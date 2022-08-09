import React, {useState} from "react";

export default {
    title: 'UseState upgrade demo'
}

function generateData() {
    // difficult counting
    console.log('generateData')
    return 100500100500;
}

export const ExampleUseState = () => {
    console.log("EXAMPLE")

    // const initialValue = useMemo(generateData, []) - не нужно использовать useMemo

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}

