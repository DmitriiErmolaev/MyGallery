import React from "react";
import "../assets/previewssection.scss"

const PreviewsSection = ({currCateg, categories, setSelectedPath}) => {


  function getFotos(currCateg) {
    if (currCateg === null) {
      return <p>Выберите категорию</p>
    }

    const imgsArr = categories.map(category => {
      if(currCateg === category.name) {
        return category.fotos.map(foto => {
          return <div className="preview__container">
            <img 
              className="preview__foto" 
              src={`./categories/${category.name}/${foto}`} 
              alt={category.name}
              onClick={()=> setSelectedPath(foto)}
            />
          </div>
        })
      }
    })

    return imgsArr;
  }

  return (
    <section className="previews">
      <ul className="previews__list">
        {getFotos(currCateg)}
      </ul>
    </section>
  )
}
export default PreviewsSection;