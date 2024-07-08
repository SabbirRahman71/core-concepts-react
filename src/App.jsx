import "./App.css";
import Team from "./assets/Team";
import Counter from "./assets/counter";
import Friends from "./assets/friends";
import Users from "./assets/users";

function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: "white",
          color: "pink",
        }}
      >
        hey everyone how are you?...
      </h1>
      <Person></Person>
      <button
        onClick={() => {
          alert("btn 3 has been  clicked");
        }}
      >
        button 3
      </button>
      <Team></Team>
      <Counter></Counter>
      <Users></Users>
      <Friends></Friends>
    </>
  );
}

function Person() {
  const age = 45;
  return <h3>I am sabbir rahman with age {age}</h3>;
}

export default App;
