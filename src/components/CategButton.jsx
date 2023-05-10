import React from "react";
import "../assets/categbutton.scss"

const CategButton = ({name, setCurrCateg, setSelectedPath}) => {

  const handleCLick = () => {
    setSelectedPath("");
    setCurrCateg(name);
    
  }
  return (
    <li className="menu__item" onClick={() => handleCLick()}>{name}</li>
  )
}

export default CategButton;
