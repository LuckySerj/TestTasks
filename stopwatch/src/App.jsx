import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import Counter from "./components/Counter/Counter";
import "./App.scss";

function App() {
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    const subject = new Subject();
    interval(1000)
      .pipe(takeUntil(subject))
      .subscribe(() => {
        if (isTimerOn) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      subject.next();
      subject.complete();
    };
  }, [isTimerOn]);

  const onStartBtnClick = () => {
    setIsTimerOn(true);
  };

  const onStopBtnClick = () => {
    setTime(0);
    setIsTimerOn(false);
  };

  const onResetBtnClick = () => {
    setTime(0);
    setIsTimerOn(true);
  };

  const onWaitBtnClick = function () {
    let clicks = 0;
    let timeout = "";
    if (isTimerOn === false) {
      return;
    }
    return function () {
      clicks++;

      if (clicks === 1) {
        timeout = setTimeout(function () {
          setIsTimerOn(true);
          clicks = 0;
        }, 300);
      } else {
        clearTimeout(timeout);
        setIsTimerOn(false);
        clicks = 0;
      }
    };
  };

  return (
    <div className="stopwatch-container">
      <Counter time={time} />
      <ButtonsBlock
        onStopBtnClick={onStopBtnClick}
        onStartBtnClick={onStartBtnClick}
        onResetBtnClick={onResetBtnClick}
        onWaitBtnClick={onWaitBtnClick()}
      />
    </div>
  );
}

export default App;
