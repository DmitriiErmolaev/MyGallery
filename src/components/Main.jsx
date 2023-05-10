import React, {useState} from "react";
import "../assets/main.scss"
import ButtonsAside from "./ButtonsAside";
import PreviewsSection from "./PreviewsSection";
import ViewingArea from "./ViewingArea";


import {nanoid as id} from "nanoid";


const categories = [
  {id:id(), name: "Nature", isChecked: false, fotos: ["IMG_20221126_155341.jpg","IMG_20221126_130950.jpg", "IMG_20221126_133352.jpg", "IMG_20221126_161007.jpg"]},
  {id:id(), name: "Mountains", isChecked: false, fotos: ["IMG_20221126_145750.jpg", ] },
  {id:id(), name: "Turkey", isChecked: false, fotos: ["IMG_20221023_142709.jpg"]}
]

const Main = () => {
  const [categ, setCateg] = useState(categories);
  const [currCateg, setCurrCateg] = useState("Nature");
  const [selectedPath, setSelectedPath] = useState("")
  
  const getCategoryFotos = (categoryName) => {
    if(categoryName === null) {
      return 
    }
    const category = categ.find(category => {
      return category.name === categoryName;
    })
    console.log(category)
    return category.fotos;
  }
 

  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <ButtonsAside categories={categ} setCurrCateg={setCurrCateg} setSelectedPath={setSelectedPath}/>
          <PreviewsSection categories={categ} currCateg={currCateg} setSelectedPath={setSelectedPath}/>
          <ViewingArea category={currCateg} fotoName={selectedPath} getCategoryFotos={getCategoryFotos}/>
        </div>
      </div>
    </main>
  )
}

export default Main;