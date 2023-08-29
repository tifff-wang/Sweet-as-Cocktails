import { useState, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as Models from '../../models/cocktails.ts'
import * as api from '../network/cocktailsAPI.ts'
import AddCocktail from './AddCocktail.tsx'
import EditCocktail from './EditCocktail.tsx'

function Cocktails() {
  const [editFormID, setEditFormID] = useState<number | null>(null)
  const queryClient = useQueryClient()

  const cocktailDelete = useMutation(api.deleteCocktail, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['cocktail'])
    },
  })

  async function onDeleteClicked(id: number) {
    cocktailDelete.mutate(id.toString())
    console.log('deleting', id)
  }

  const cocktailEdit = useMutation(api.editCocktail, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['cocktail'])
    },
  })

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

  async function afterEditing() {
    setEditFormID(null)
    // await fetchCocktails()
  }

  async function onEditClicked(id: number) {
    setEditFormID(id)
    cocktailEdit.mutate(form)
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

      <AddCocktail />
    </div>
  )
}

export default Cocktails
