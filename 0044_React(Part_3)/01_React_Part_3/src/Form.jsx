function HandleOnSubmit() {
  event.preventDefault();
  console.log("form was submitted");
}

export default function Form() {
  return (
    <form onSubmit={HandleOnSubmit}>
      <input type="text" placeholder="Write Something" />
      <button>Submit</button>
    </form>
  );
}
