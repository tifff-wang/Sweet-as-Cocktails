import { ChangeEvent, FormEvent, useState } from 'react'
import { useCocktails } from '../../hooks/hooks'

const initialFormData = {
  name: '',
  ingredients: '',
  price: 0,
}

interface AddCocktailFormProps {
  setIsOpen: (isOpen: boolean) => void
}

const AddCocktailForm = ({ setIsOpen }: AddCocktailFormProps) => {
  const [form, setForm] = useState(initialFormData)
  const hook = useCocktails()
  const cocktailAdd = hook.add

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    cocktailAdd.mutate(form)
    setForm(initialFormData)
    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Cocktail</h2>
      <label htmlFor="name">
        Cocktail name:
        <input
          id="name"
          onChange={handleChange}
          value={form.name}
          name="name"
          required
        />
      </label>

      <label htmlFor="ingredients">
        Ingredients:
        <input
          id="ingredients"
          onChange={handleChange}
          value={form.ingredients}
          name="ingredients"
          required
        />
      </label>

      <label htmlFor="price">
        Price:
        <input
          id="price"
          onChange={handleChange}
          value={form.price === 0 ? '' : form.price}
          name="price"
          required
        />
      </label>

      <button>Add Cocktail</button>
    </form>
  )
}

export default AddCocktailForm
