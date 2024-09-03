import { useState } from 'react'
import './AddCocktail.styles.scss'
import OpenCloseIcons from './OpenCloseIcons.tsx'
import AddCocktailForm from './AddCocktailForm.tsx'

function AddCocktail() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <section className="addCocktail-container">
        <OpenCloseIcons isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <AddCocktailForm setIsOpen={setIsOpen} />}
      </section>
    </>
  )
}

export default AddCocktail
