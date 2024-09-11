import { useState } from "react";
function Team() {
  const [count, setCount] = useState(1); // state is immutable that mean count is not change we can not change the value of count
  const addTeam = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const removePlayers = () => {
    const newCount = count - 1;
    if (count > 1) {
      setCount(newCount);
    }
  };
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "10px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {count}</h3>
      <button onClick={addTeam}>Add</button>
      <button onClick={removePlayers}>Remove</button>
    </div>
  );
}

export default Team;
