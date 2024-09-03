import { ChangeEvent, FormEvent, useState } from 'react'
import * as Models from '../../../models/cocktails.ts'
import { useCocktails } from '../../hooks/hooks.ts'
import './EditCocktailForm.styles.scss'

interface EditCocktailFormProps {
  afterEditing: () => void
  cocktail: Models.Cocktail
}

const EditCocktailForm = ({
  afterEditing,
  cocktail,
}: EditCocktailFormProps) => {
  const initialFormData = {
    id: cocktail.id,
    name: cocktail.name,
    ingredients: cocktail.ingredients,
    price: cocktail.price,
  }
  const [form, setForm] = useState(initialFormData)
  const hook = useCocktails()
  const cocktailEdit = hook.edit

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    cocktailEdit.mutate(form)
    afterEditing()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit the cocktail</h2>

      <label htmlFor="name">
        Cocktail name:
        <input
          id="name"
          onChange={handleChange}
          value={form.name}
          name="name"
        />
      </label>

      <label htmlFor="ingredients">
        Ingredients:
        <input
          id="ingredients"
          onChange={handleChange}
          value={form.ingredients}
          name="ingredients"
        />
      </label>

      <label htmlFor="price">
        Price:
        <input
          id="price"
          onChange={handleChange}
          value={form.price === 0 ? '' : form.price}
          name="price"
        />
      </label>

      <button>Update</button>
      <button className="cancel-button" onClick={() => afterEditing()}>Cancel</button>
    </form>
  )
}

export default EditCocktailForm
