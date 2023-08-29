import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import * as Models from '../../models/cocktails.ts'
import * as api from '../network/cocktailsAPI.ts'
import AddCocktail from './AddCocktail.tsx'
import EditCocktail from './EditCocktail.tsx'

function Cocktails() {
  const [editFormID, setEditFormID] = useState<number | null>(null)

  const {
    data: cocktails,
    isLoading,
    isError,
  } = useQuery(['cocktail'], api.getCocktails)

  if (!cocktails || isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Something went wrong</p>
  }

  function updateCocktail(newCocktail: Models.Cocktail) {
    setCocktails([...cocktails, newCocktail])
  }

  async function afterEditing() {
    setEditFormID(null)
    await fetchCocktails()
  }

  async function onEditClicked(id: number) {
    setEditFormID(id)
  }

  async function onDeleteClicked(id: number) {
    const isSuccess = await api.deleteCocktail(id.toString())
    if (isSuccess) {
      await fetchCocktails()
    }
  }

  return (
    <div>
      <ul>
        {cocktails.map((cocktail) => {
          if (editFormID == cocktail.id) {
            return (
              <li key={cocktail.id}>
                <EditCocktail afterEditing={afterEditing} cocktail={cocktail} />
                <button onClick={() => setEditFormID(null)}>Cancel</button>
              </li>
            )
          } else {
            return (
              <li key={cocktail.id}>
                {cocktail.name} <br></br>ingredients:{cocktail.ingredients}{' '}
                <br></br>price: ${cocktail.price}
                <br></br>
                <button
                  onClick={() => {
                    onDeleteClicked(cocktail.id)
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    onEditClicked(cocktail.id)
                  }}
                >
                  Edit
                </button>
              </li>
            )
          }
        })}
      </ul>

      <AddCocktail updateCocktail={updateCocktail} />
    </div>
  )
}

export default Cocktails
function userQuery(
  arg0: string[],
  getCocktails: any,
): { data: any; isLoading: any; isError: any } {
  throw new Error('Function not implemented.')
}
