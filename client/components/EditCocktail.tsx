import { useState, FormEvent, ChangeEvent } from 'react'
import * as api from '../network/cocktailsAPI.ts'
import * as Models from '../../models/cocktails.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Props {
  afterEditing: () => void
  cocktail: Models.Cocktail
}

function EditCocktail(props: Props) {
  const initialFormData = {
    id: props.cocktail.id,
    name: props.cocktail.name,
    ingredients: props.cocktail.ingredients,
    price: props.cocktail.price,
  }

  const [form, setForm] = useState(initialFormData)
  const queryClient = useQueryClient()

  const cocktailEdit = useMutation(api.editCocktail, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['cocktail'])
    },
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    cocktailEdit.mutate(form)
    props.afterEditing()
  }

  return (
    <>
      <h3>Edit the cocktail</h3>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Cocktail name:</label>
          <br />
          <input
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
        </p>

        <p>
          <label htmlFor="ingredients">Ingredients:</label>
          <br />
          <input
            id="ingredients"
            onChange={handleChange}
            value={form.ingredients}
            name="ingredients"
          />
        </p>

        <p>
          <label htmlFor="price">Price:</label>
          <br />
          <input
            id="price"
            onChange={handleChange}
            value={form.price === 0 ? '' : form.price}
            name="price"
          />
        </p>

        <button>Update</button>
      </form>
    </>
  )
}

export default EditCocktail
