import React, {useState} from "react";

export default {
    title: 'ReactMemo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>{
        props.users.map((u, i) =>
            <div key={i}>{u}</div>
        )}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("EXAMPLE")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', "Katya"])
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    const addUser = () => {
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

