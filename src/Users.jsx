import {useEffect,useState} from 'react'
export default function User(){
    const [state,setState] = useState([]);
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setState(data));
}, []);
    return (
        <>
        <h2>User: {state.length}</h2>
        </>
    );
}