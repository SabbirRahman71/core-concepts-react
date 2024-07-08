import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    setTeam(team + 1);
  };
  const remove = () => {
    setTeam(team - 1);
  };
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div>
      <h3 style={teamStyle}>Players:{team}</h3>
      <button onClick={handleAdd}>Add player</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}
