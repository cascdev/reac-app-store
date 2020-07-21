import React from 'react'

const Produto = ({ produto, produtos, carrinho, agregarProduto }) => {

    const { id, nome, preco } = produto

    const incluirProduto = ( id ) => {

        const produto = produtos.filter( p => p.id === id ) //retorna um array com o objeto filtrado
        
        agregarProduto([ ...carrinho, produto[0] ])
    }

    const excluirProduto = ( id ) => {

        const produtos = carrinho.filter( p => p.id !== id )

        agregarProduto( produtos )
    }

    return ( 
        <>
            <h3>{ nome }</h3>
            <p>R$ { preco }</p>

            { produtos
                ?
                    (
                        <button 
                            type = 'button'
                            onClick = { () => incluirProduto(id) }
                            >Comprar 
                        </button>
                    )
                :
                    (
                        <button 
                            type = 'button'
                            onClick = { () => excluirProduto(id) }
                            >Excluir 
                        </button>
                    )
            }
        </>
        
    )
}
 
export default Produto