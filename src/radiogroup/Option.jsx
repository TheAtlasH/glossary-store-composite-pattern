import { useContext } from "react";
import { RadioGroupContext, RadioOptionContext } from "./contexts";

const Option = ({ value, icon, isPopular, children }) => {
  const { name, selectedValue, onChange } = useContext(
    RadioGroupContext,
    RadioOptionContext
  );
  const isSelected = selectedValue === value;
  return (
    <label style={isPopular ? { border: "1px dashed red" } : null}>
      {icon}
      <input
        type="radio"
        value={value}
        name={name}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <RadioOptionContext.Provider value={isSelected}>
        {children}
      </RadioOptionContext.Provider>
      {isPopular ? <strong>🔥 Popular!</strong> : null}
    </label>
  );
};

export default Option;
