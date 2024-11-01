import { useContext } from "react";
import { RadioOptionContext } from "./contexts";

const Details = ({ children }) => {
  const isSelected = useContext(RadioOptionContext);
  return isSelected ? children : null;
};

export default Details;
