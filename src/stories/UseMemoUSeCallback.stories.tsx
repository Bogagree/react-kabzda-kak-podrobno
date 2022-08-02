import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i < a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [])

    for (let i = 1; i < b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>result for a: {resultA}</div>
            <div>result for b: {resultB}</div>
        </div>
    );
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>{
        props.users.map((u, i) =>
            <div key={i}>{u}</div>
        )}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
        console.log("HelpsToReactMemo")

        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', "Katya"])

        const newArr: Array<string> = useMemo(() => {
            return users.filter(u => u.toLowerCase().indexOf('a') > -1)
        }, [users])

        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        const addUser = () => {
            setUsers(newUsers);
        }

        return <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={addUser}>add user</button>
            <Users users={newArr}/>
        </>
    }
;

export const LikeUseCallback = () => {
        console.log("LikeUseCallback")

        const [counter, setCounter] = useState(0)
        const [books, setBooks] = useState(['React', 'JS', 'CSS', "HTML"])

        // const newBooksArr: Array<string> = useMemo(() => {
        //     return books.filter(u => u.toLowerCase().indexOf('a') > -1)
        // }, [books])


        const memoizedAddBook = useMemo(() => {
            return () => {
                console.log(books)
                const newBooks = [...books, 'Angular' + new Date().getTime()]
                setBooks(newBooks)
            }
        }, [books])

        const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }, [books])


        return <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books books={books} addBook={memoizedAddBook}/>
        </>
    }
;

type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)