import NewDetail from "./components/NewDetail/NewDetail";
import DetailCard from "./components/DetailCard/DetailCard";
import "./app.css";
import { useState } from "react";

function App() {
  const UserData = [
    {
      id: 1,
      name: "dasd",
      age: 3,
      edit: false,
    },
  ];
  const [userDataFull, setUserDataFull] = useState(UserData);
  const [currentData, setCurrentData] = useState("");

  const addDetailHandler = (detailData) => {
    setUserDataFull((prevData) => [detailData, ...prevData]);
  };

  const updateDetailHandler = (id, updatedData) => {
    setUserDataFull((prevData) => {
      return prevData.map((user) => {
        if (user.id === id) {
          user.name = updatedData.name;
          user.age = updatedData.age;
        }
        return user;
      });
    });
  };

  const onDeleteHandler = (idOfTheCardToRemove) => {
    setUserDataFull((prevData) =>
      prevData.filter((item) => item.id !== idOfTheCardToRemove)
    );
  };

  const onEditHandler = (...args) => {
    const [_name, _age, _id] = args;

    const currentUserDataToFillIntoForm = {
      name: _name,
      age: _age,
      id: _id,
      edit: true,
    };
    setCurrentData(currentUserDataToFillIntoForm);
    // console.log(currentUserDataToFillIntoForm);
  };

  let displayContent = <p>No user data entered yet!</p>;

  // console.log(userDataFull);

  if (userDataFull !== undefined && userDataFull.length > 0) {
    displayContent = userDataFull.map((data) => (
      <DetailCard
        key={data.id}
        id={data.id}
        name={data.name}
        age={data.age}
        edit={data.edit}
        onDelete={onDeleteHandler}
        onEdit={onEditHandler}
      />
    ));
  }

  return (
    <div className="app">
      <NewDetail
        onAddDetail={addDetailHandler}
        onUpdateDetail={updateDetailHandler}
        currentData={currentData}
      />
      <div className="app__item">{displayContent}</div>
    </div>
  );
}

export default App;
