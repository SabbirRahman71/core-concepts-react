export default function Friend({ friend }) {
  const { name, email } = friend;
  const box = {
    padding: "15px",
    margin: "20px",
    border: "2px solid red",
    borderRadius: "20px",
  };
  return (
    <div style={box}>
      <h4>Name:{name}</h4>
      <p>Email:{email}</p>
    </div>
  );
}
