import React, { useState }  from 'react'

// Importe, abaixo, os componentes
import Header from './components/Header'
import Footer from './components/Footer'
import Produto from './components/Produto'
import Carrinho from './components/Carrinho'

  
const App = () =>  {

  // 2-Criar Lista de Produtos 
  const [ produtos, guardarProdutos ] = useState([
    { id:1, nome: 'Camiseta ReactJS', preco:99},
    { id:2, nome: 'Camiseta VueJS', preco:80},
    { id:3, nome: 'Camiseta NodeJS', preco:110},
    { id:4, nome: 'Camiseta AngularJS', preco:100}
  ])


  const [ carrinho, agregarProduto ] = useState([])


  // 1-Criando uma variável dinâmica para o ano corrente
  const ano = new Date().getFullYear()

  return (
    <>    
      <Header 
        titulo='Loja Virtual!'
      />

      <h1>Lista de Produtos</h1>

      { 
        produtos.map( 
          produto => (
            <Produto
              key = { produto.id }
              produto={ produto }
              produtos={ produtos }
              carrinho={ carrinho }
              agregarProduto={ agregarProduto }
            />
          )
        )
      }


      <Carrinho 
        carrinho={ carrinho }
        agregarProduto={ agregarProduto }
      />

      <Footer 
        ano={ano} 
      /> 
    </> 
  )
}
export default App

