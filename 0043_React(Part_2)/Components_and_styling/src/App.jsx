import Hello from "./Hello";

function App() {
  let styles1 = { color: "blue" };
  let styles2 = { color: "red" };
  return (
    <>
      <Hello username="Kishan" textColors="red"></Hello>
      <Hello username="Deebyanshu" textColors="blue"></Hello>
    </>
  );
}

export default App;
