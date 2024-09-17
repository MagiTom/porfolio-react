import React, { forwardRef } from 'react';
import { ButtonPropsPair } from '../../types/ButtonProps.model';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import GitHubIcon from "@mui/icons-material/GitHub";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import LanguageIcon from '@mui/icons-material/Language';
import './ButtonsPair.scss'

const ButtonsPair: React.FC<ButtonPropsPair> =(({onClick, web}) => {

  return (
    <div className="buttons">
    <ButtonCircle theme="dark" onClick={onClick}>
    { web ? <LanguageIcon style={{ color: "var(--theme-light)" }} /> : <GitHubIcon style={{ color: "var(--theme-light)" }} />}
    </ButtonCircle>
    <ButtonCircle theme="light" onClick={onClick}>
      <NorthEastIcon style={{ color: "var(--theme-dark)" }} />
    </ButtonCircle>
  </div>
  );
});

ButtonsPair.displayName = 'Button'; 

export default ButtonsPair;