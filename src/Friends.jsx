import Friend from './Friend';
import './Friends.css'
import {useState,useEffect} from 'react'
export default function Friends(){
   
    const [friends,setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data));
    }, []);
    return (
        <div className="box">
            <h3>Users: {friends.length}</h3>
            {
                // eslint-disable-next-line react/jsx-key
                friends.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    );
}