import "./DetailForm.css";
import { useState } from "react";

function DetailForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //stay on current page without reloading
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onSaveExpenseData(userData);
    setEnteredAge("");
    setEnteredName("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        name="name"
        onChange={nameChangeHandler}
        value={enteredName}
      />
      <br />
      <label htmlFor="name">Age : </label>
      <input
        type="number"
        name="age"
        onChange={ageChangeHandler}
        value={enteredAge}
      />
      <br />

      <button type="submit">Add Me!</button>
    </form>
  );
}

export default DetailForm;
