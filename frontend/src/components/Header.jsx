import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import Slide from "@material-ui/core/Slide";

export default function Header() {
  return (
    <header>
      <h1>
        <Slide direction="right" in={true}>
          <DescriptionIcon />
        </Slide>{" "}
        Note +
      </h1>
    </header>
  );
}