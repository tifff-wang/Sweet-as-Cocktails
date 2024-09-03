import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { useCocktails } from '../../hooks/hooks'
import * as Models from '../../../models/cocktails.ts'

interface CocktailItemProps {
  setEditFormID: (editFormID: number) => void
  cocktail: Models.Cocktail
}

const CocktailItem = ({ setEditFormID, cocktail }: CocktailItemProps) => {
  const hook = useCocktails()
  const cocktailDelete = hook.delete

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

  return (
    <>
      <div>
        <h2>{cocktail.name}</h2>
        <h3>{cocktail.ingredients}</h3>
        <p className="price">${cocktail.price}</p>
      </div>
      <div className="cocktail-item-icons">
        {' '}
        <MdDelete
          onClick={() => {
            onDeleteClicked(cocktail.id)
          }}
        />
        <MdEdit
          onClick={() => {
            onEditClicked(cocktail.id)
          }}
        />
      </div>
    </>
  )
}

export default CocktailItem
