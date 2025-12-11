function printHello(event) {
  console.log("Hello World!!");
  console.log(event);
}

function printBye(){
    console.log("Byeee!!");
}
function doubleClk(){
    console.log("DOUBLE Clickkkk!!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click</button>
      <p onMouseOver={printBye}>Demo Para</p>
      <p onDoubleClick={doubleClk}>Demo Para</p>
    </div>
  );
}
