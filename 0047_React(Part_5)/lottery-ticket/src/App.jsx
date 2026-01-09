import "./App.css";
import Lottery from "./Lottery";
import TicketNum from "./TicketNum";

function App() {
  return (
    <>
      <TicketNum num={5}></TicketNum>
      <TicketNum num={2}></TicketNum>
      <TicketNum num={3}></TicketNum>
    </>
  );
}

export default App;
