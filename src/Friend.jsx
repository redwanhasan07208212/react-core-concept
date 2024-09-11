// eslint-disable-next-line react/prop-types
export default function Friend({friend}){
// eslint-disable-next-line react/prop-types
const {name,email} = friend
    return (
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}