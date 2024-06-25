import {
  resetCounter,
  selectCounter,
  selectDescription,
  setCounter,
} from "../exampleSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Header } from "./styled";

export const Page = () => {
  const counter = useSelector(selectCounter);
  const description = useSelector(selectDescription);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{description}</p>
      <Header $isEven={counter % 2 === 0}>
        Page <span>{counter}</span>
      </Header>
      <Button onClick={() => dispatch(setCounter(counter + 1))}>+</Button>
      <Button onClick={() => dispatch(setCounter(counter - 1))}>-</Button>
      <Button onClick={() => dispatch(resetCounter())}>Reset</Button>
    </div>
  );
};
