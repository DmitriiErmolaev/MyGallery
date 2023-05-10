import React from "react";
import "../assets/viewingarea.scss"


const ViewingArea = ({category, fotoName, getCategoryFotos}) => {
  const CategoryFirstFoto = getCategoryFotos(category)[0];
  if (CategoryFirstFoto === null) {
    return (
      <section className="view-area">
        <p>Choose Category</p>
      </section>
     )
  } else {
  // `categories/${category}/${fotoName}`
    return (
    <section className="view-area">
      <img className="large-img" src={`categories/${category}/${fotoName || CategoryFirstFoto}`} alt="large img" />
    </section>
    )
  }
}

export default ViewingArea;
