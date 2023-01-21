import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Item from "../item";

const App = () => {
  const tasks = useSelector((state) => state.itemReducers.items );
  return (
    <Container maxWidth="lg">
      <button
        onClick={() => {
          console.log(tasks);
        }}
      >
        111
      </button>
      <Item item={tasks[0]}/>
    </Container>
  );
};
export default App;
