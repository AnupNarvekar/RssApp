import Categories from './components/CategoriesContainer/CategoriesContainer'
import PostCards from './components/CardsContainer/CardsContainer'
import Posts from './components/PostsContainer/PostsContainer'
import './App.css'

function App() {

  return (
    <div className="appContainer">
      <Categories />
      <PostCards />
      <Posts />
    </div>
  )
}

export default App
