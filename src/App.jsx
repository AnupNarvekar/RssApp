import Categories from './components/CategoriesContainer/CategoriesContainer'
import Cards from './components/CardsContainer/CardsContainer'
import Posts from './components/PostsContainer/PostsContainer'
import './App.css'

function App() {

  return (
    <div className="appContainer">
      <Categories />
      <Cards />
      <Posts />
    </div>
  )
}

export default App
