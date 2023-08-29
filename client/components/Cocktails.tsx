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

  function onDeleteClicked(id?: number) {
    if (id) {
      cocktailDelete.mutate(id.toString())
    }
  }

  async function onEditClicked(id?: number) {
    if (id) {
      setEditFormID(id)
    }
  }

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
                <b>{cocktail.name}</b> <br></br>Ingredients:{' '}
                {cocktail.ingredients} <br></br>Price: ${cocktail.price}
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
