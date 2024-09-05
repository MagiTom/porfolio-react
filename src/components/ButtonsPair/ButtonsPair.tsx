import React, { forwardRef } from 'react';
import { ButtonPropsPair } from '../../types/ButtonProps.model';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import GitHubIcon from "@mui/icons-material/GitHub";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import './ButtonsPair.scss'

const ButtonsPair: React.FC<ButtonPropsPair> =(({onClick}) => {

  return (
    <div className="buttons">
    <ButtonCircle theme="dark" onClick={() => alert("Clicked!")}>
      <GitHubIcon style={{ color: "var(--theme-light)" }} />
    </ButtonCircle>
    <ButtonCircle theme="light" onClick={() => alert("Clicked!")}>
      <NorthEastIcon style={{ color: "var(--theme-dark)" }} />
    </ButtonCircle>
  </div>
  );
});

ButtonsPair.displayName = 'Button'; // Optional but helps in debugging

export default ButtonsPair;