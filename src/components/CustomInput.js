import React from "react";
import { createUseStyles } from "react-jss";

export default function CustomInput({ label, errorMessage, ...props }) {
  const classes = useStyle();

  return (
    <div className={classes.customInputWrapper}>
      <div className={classes.fieldLabel}>{label}</div>
      <input
        {...props}
        placeholder={"Enter the " + label.toLowerCase()}
        className={classes.customInput}
      />
      <div className={classes.errorMessage}>{errorMessage}</div>
    </div>
  );
}

const useStyle = createUseStyles({
  customInputWrapper: {
    width: "100%",
    marginBottom: 5,
  },
  fieldLabel: {
    padding: [10, 5],
    fontSize: 16,
    color: "#fff",
  },
  customInput: {
    width: "100%",
    padding: [12, 15],
    fontSize: 14,

    outline: "none",
    border: "1px solid grey",
    borderRadius: "5px",
  },
  errorMessage: {
    padding: 5,
    fontSize: 12,
    color: "#ff9494",
  },
});
