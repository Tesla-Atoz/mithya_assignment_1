import "./DetailForm.css";
import { useEffect, useState } from "react";

function DetailForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  let dataToFill = props.currentData;

  // const [currentName, setCurrentName] = useState(dataToFill.name);
  // const [currentAge, setCurrentAge] = useState(dataToFill.age);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const emptyState = {};
  const submitHandler = (event) => {
    event.preventDefault(); //stay on current page without reloading
    console.log(event.type);
    if (event.type === "submit" && dataToFill.edit) {
      const userData = {
        name: enteredName,
        age: enteredAge,
      };
      props.onUpdateDetail(dataToFill.id, userData);
      setEnteredAge("");
      setEnteredName("");
      dataToFill.edit = false;
      return;
    }
    if (event.type === "submit") {
      const userData = {
        name: enteredName,
        age: enteredAge,
      };
      props.onSaveExpenseData(userData);
      setEnteredAge("");
      setEnteredName("");
      return;
    }
  };

  useEffect(() => {
    if (dataToFill.edit) {
      setEnteredName(dataToFill.name);
      setEnteredAge(dataToFill.age);
    }
  }, [dataToFill]);

  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        name="name"
        onChange={nameChangeHandler}
        value={enteredName}
      />
      )
      <br />
      <label htmlFor="name">Age : </label>
      <input
        type="number"
        name="age"
        onChange={ageChangeHandler}
        value={enteredAge}
      />
      <br />
      {dataToFill.edit ? (
        <button type="submit">Update Me!</button>
      ) : (
        <button type="submit">Add Me!</button>
      )}
    </form>
  );
}

export default DetailForm;
