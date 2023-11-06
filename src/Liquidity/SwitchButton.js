import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

export default function SwitchButton(props) {
  const { setDeploy } = props;

  const changeStyles = (K) => {
    let add_button = document.getElementById("add-button");
    let remove_button = document.getElementById("remove-button");

    if (K === true) {
      add_button.style.backgroundColor = "#4CAF50"; // Green color
      add_button.style.color = "white";
      remove_button.style.backgroundColor = "#9e9e9e"; // Grey color
      remove_button.style.color = "white";
    } else {
      remove_button.style.backgroundColor = "#ff0000"; // Red color
      remove_button.style.color = "white";
      add_button.style.backgroundColor = "#9e9e9e"; // Grey color
      add_button.style.color = "white";
    }
  };

  return (
    <div>
      <ButtonGroup size="large" variant="contained">
        <Button
          id="add-button"
          style={{ backgroundColor: "#4CAF50", color: "white" }} // Default style for add button
          onClick={() => {
            setDeploy(true);
            changeStyles(true);
          }}
        >
          Deploy Liquidity
        </Button>

        <Button
          id="remove-button"
          style={{ backgroundColor: "#9e9e9e", color: "white" }} // Default style for remove button
          onClick={() => {
            setDeploy(false);
            changeStyles(false);
          }}
        >
          Remove Liquidity
        </Button>
      </ButtonGroup>
    </div>
  );
}
