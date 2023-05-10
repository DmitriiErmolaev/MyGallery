import React from "react";
import "../assets/buttonsaside.scss"
import CategButton from "./CategButton"

const ButtonsAside = ({categories, setCurrCateg, setSelectedPath}) => {
  const names = categories.map(category => {
    return <CategButton key={category.id} name={category.name} setCurrCateg={setCurrCateg} setSelectedPath={setSelectedPath}/>;
  })

  return (
    <aside className="buttons">
      <ul className="buttons__list">
        {names}
      </ul>
    </aside>
  )
}

export default ButtonsAside;
