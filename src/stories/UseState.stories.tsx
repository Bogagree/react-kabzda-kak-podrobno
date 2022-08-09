import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo'
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("Simple EXAMPLE")

    useEffect( () => {
        console.log('useEffect every render')
        document.title = counter.toString()
    }, )

    useEffect( () => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect( () => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, counter: {counter}
        <button onClick={() => setCounter(counter + 1) }>counter+</button>

        fake: {fake}
        <button onClick={() => setFake(fake + 1) }>fake+</button>


    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("Simple EXAMPLE")

    // useEffect( () => {
    //     setTimeout(()=> {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])
    
    useEffect( () => {
        setInterval(()=> {
            console.log('tick: ' + counter)
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter}
        <button onClick={() => setCounter(counter + 1) }>counter+</button>

        fake: {fake}
        <button onClick={() => setFake(fake + 1) }>fake+</button>


    </>
}