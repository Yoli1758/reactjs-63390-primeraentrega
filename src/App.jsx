import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"



function App() {
  const greeting="Bienvenido a YeSport..Tu Tienda Deportiva"
  return (
    <>
  
     <NavBar/>
     
     <ItemListContainer greeting={greeting}/>
     </>
  )
}

export default App
