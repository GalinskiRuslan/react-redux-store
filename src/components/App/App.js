import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import ItemList from "../item-list/ItemList";
import { fetchItems } from "../../store/reducers/itemsSlice";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.itemReducers.itemList);
  const { status, error } = useSelector((state) => state.itemReducers);
  useEffect(() => {
    dispatch(fetchItems());
    console.log("useEff");
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <button
        onClick={() => {
          console.log(tasks, status, error);
        }}
      >
        111
      </button>
      <ItemList items={tasks} />
    </Container>
  );
};
export default App;
