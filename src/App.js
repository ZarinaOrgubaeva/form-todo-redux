import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Auth } from "./components/form/Auth";
import { Header } from "./components/header/Header";
import { ToDo } from "./components/toDoList/ToDo";
import { ToDoList } from "./components/toDoList/ToDoList";
import { Button } from "./components/UI/button/Button";
import { toDoSlice } from "./store/toDoSlice";

function App() {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(toDoSlice.actions.deleteAll());
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/form/" element={<Auth />} />
        <Route
          path="/todo/:id"
          element={
            <ToDo>
              <ToDoList/>
              {" "}
              <Button onClick={deleteAll}>Delete All</Button>
            </ToDo>
          }
        >
         
        </Route>
      </Routes>
    </>
  );
}

export default App;
