import React, { useState, useEffect } from "react";
import Button from "./Button";
import Counter from "./Counter";
import data from "./Data";
import Picture from "./Picture";

const App = () => {
  const [vCount, setVCount] = useState(0);
  const [xCount, setXCount] = useState(0);
  const [picId, setPicID] = useState(0)
  const [currentPicUrl, setCurrentPicUrl] = useState(data[0].url);
  const [description, setDescription] = useState(data[0].description);
  const [isMatch, setIsMatch] = useState(data[0].match);

  const setNextPictureObj = (i) => {
    setDescription(data[i].description)
    setCurrentPicUrl(data[i].url)
    setIsMatch(data[i].match)
  }

  useEffect(() => {
    setNextPictureObj(picId)
  }, [picId]);

  const clickHandler = (clickedBtn) => {
    const type = clickedBtn.getAttribute("id");
    if (
      (type === "yes" && isMatch === true) ||
      (type === "no" && isMatch === false)
    ) {
      setVCount((prevCount) => prevCount + 1);
    } else setXCount((prevCount)=> prevCount + 1)

    if (picId <= 3) setPicID((prev)=> prev + 1)
    else {
      setPicID(0)
      setXCount(0)
      setVCount(0)
    }
  };

  return (
    <div className="screen-wrap">
    <h1>Does the name match the TV show?</h1>
      <div className="wrapper counters-wrapper">
        <Counter count={xCount} customClass="x" />
        <Counter count={vCount} customClass="v" />
      </div>
      <Picture url={currentPicUrl} />
      <div className="wrapper bottom-wrapper">
        <Button text="NO!" onButtonClick={clickHandler} id="no" picId={picId} />
        <h1>{description}</h1>
        <Button text="YES!" onButtonClick={clickHandler} id="yes" />
      </div>
    </div>
  );
};

export default App;
