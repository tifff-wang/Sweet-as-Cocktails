import { useState, FormEvent, ChangeEvent } from 'react'
import { useCocktails } from '../hooks/hooks.ts'

const initialFormData = {
  name: '',
  ingredients: '',
  price: 0,
}

function AddCocktail() {
  const [form, setForm] = useState(initialFormData)

  const hook = useCocktails()
  const cocktailAdd = hook.useAddCocktail()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    cocktailAdd.mutate(form)
    setForm(initialFormData)
  }

  return (
    <>
      <h2>Add new Cocktail</h2>

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

        <button>Add Cocktail</button>
      </form>
    </>
  )
}

export default AddCocktail
