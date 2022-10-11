import Loader from './components/Loader'
import Button from './components/Button'
import GalleryList from './components/GalleryList'
import GalleryItem from './components/GalleryItem'
import Modal from './components/Modal'
import { Component } from 'react'
import SearchBar from './components/SearchBar'


class App extends Component {
  render(){
    return (
    <div className="App">
      
      <Button/>
      <Loader/>
      <GalleryItem/>
      <GalleryList/>
      <Modal/>
      <SearchBar/>
    </div>
  );}
}

export default App;
