import React from "react";
import Button from "../Button/Button";
import "./ButtonsBlock.scss";

const ButtonsBlock = ({
  onStopBtnClick,
  onStartBtnClick,
  onResetBtnClick,
  onWaitBtnClick,
}) => {
  return (
    <div className="buttons-wrapper">
      <Button
        onClick={onStartBtnClick}
        text="Start"
        className="btn btn--start"
      />

      <Button onClick={onStopBtnClick} text="Stop" className="btn btn--stop" />

      <Button
        onClick={onResetBtnClick}
        text="Reset"
        className="btn btn--reset"
      />
      <Button onClick={onWaitBtnClick} text="Wait" className="btn btn--wait" />
    </div>
  );
};

export default ButtonsBlock;
