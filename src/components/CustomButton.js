import React from "react";
import { createUseStyles } from "react-jss";

export default function CustomButton({ label, ...props }) {
  const classes = useStyle();

  return (
    <button {...props} className={classes.customButton}>
      {label}
    </button>
  );
}

const useStyle = createUseStyles({
  customButton: {
    margin: [20, 0],
    width: "100%",
    padding: [12, 12],
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 5,
    background: "rgb(85,94,207)",
    color: "#fff",
    border: "none",
  },
});
