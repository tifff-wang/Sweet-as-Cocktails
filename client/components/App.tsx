import CocktailMenu from './cocktailMenu/CocktailMenu'
import AddCocktail from './addCocktail/AddCocktail'
import './App.styles.scss'

function App() {
  return (
    <>
      <div className="app">
        <CocktailMenu />
        <AddCocktail />
      </div>
    </>
  )
}

export default App
