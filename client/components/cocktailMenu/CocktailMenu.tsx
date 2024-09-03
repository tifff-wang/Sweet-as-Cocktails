import { useState } from 'react'
import { useCocktails } from '../../hooks/hooks.ts'
import './CocktailMenu.style.scss'
import EditCocktailForm from '../editCocktail/EditCocktailForm.tsx'
import CocktailItem from './CocktailItem.tsx'

function CocktailMenu() {
  const [editFormID, setEditFormID] = useState<number | null>(null)

  const { data: cocktails, isLoading, isError } = useCocktails()

  if (!cocktails || isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Something went wrong</p>
  }

  async function afterEditing() {
    setEditFormID(null)
  }

  return (
    <>
      <h1>Sweet as Cocktails Menu</h1>
      <div className="cocktail-list-container">
        <ul>
          {cocktails.map((cocktail) => {
            if (editFormID == cocktail.id) {
              return (
                <li key={cocktail.id}>
                  <EditCocktailForm
                    afterEditing={afterEditing}
                    cocktail={cocktail}
                  />
                </li>
              )
            } else {
              return (
                <li key={cocktail.id} className="cocktail-item">
                  <CocktailItem
                    setEditFormID={setEditFormID}
                    cocktail={cocktail}
                  />
                </li>
              )
            }
          })}
        </ul>
      </div>
    </>
  )
}

export default CocktailMenu
