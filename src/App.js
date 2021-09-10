import NewDetail from "./components/NewDetail/NewDetail";
import DetailCard from "./components/DetailCard/DetailCard";
import "./app.css";
import { useState } from "react";

function App() {
  const UserData = [];

  const [userDataFull, setUserDataFull] = useState(UserData);

  const addDetailHandler = (detailData) => {
    setUserDataFull((prevData) => [detailData, ...prevData]);
  };

  return (
    <div className="app">
      <NewDetail onAddDetail={addDetailHandler} />
      <div className="app__item">
        {userDataFull.map((data) => (
          <DetailCard name={data.name} age={data.age} />
        ))}
      </div>
    </div>
  );
}

export default App;
