import './Module.css'
import NavBar from './Components/NavBar'
import List from './Components/List'
import Product from './Components/Product'


function App() {

  return (
    <main>
      <NavBar />
      <div className="container">
      <List />
        <div className="products">
          <Product 
          product="CAMISA ZELDA - BLACK EDITION" 
          image="https://acdn.mitiendanube.com/stores/002/515/468/products/camisa-zelda-black-edition-ocarina-of-time-021-230d6d8d8db115375416781304326889-1024-1024.png" 
          price="R$ 64,90" />
          <Product 
          product="CAMISA GASTLY HAUNTER GENGAR" 
          image="https://acdn.mitiendanube.com/stores/002/515/468/products/camisa-gastly-haunter-gengar-pokemon-black-edition1-a67590ed5a97b85bd716754836870552-1024-1024.png" 
          price="R$ 64,90" />
          <Product 
          product="Camisa Black Edition Yu-Gi-Oh!" 
          image="https://dcdn.mitiendanube.com/stores/002/217/630/products/22camisa-91-7c580cba7ad1164c3116733284018509-640-0.png" 
          price="R$ 64,90" />

          <Product 
          product="Camisa Dragon Ball Mestre Kame" 
          image="https://cdnv2.moovin.com.br/backinblack/imagens/produtos/det/camiseta-dragon-ball-mestre-kame-chemical.jpg" 
          price="R$ 79,00" />
          <Product 
          product="Camisa Cavaleiros Do Zodíaco" 
          image="https://down-br.img.susercontent.com/file/24cd870e52f7bfd57660a327886e4ce7" 
          price="R$ 75,00" />
          <Product 
          product="Camisa Yu Yu Hakusho" 
          image="https://down-br.img.susercontent.com/file/a562b9389145fd5cfe1f6dfa90a89053" 
          price="R$ 49,99" />
        </div>
      </div>
    </main>
  )
}

export default App
