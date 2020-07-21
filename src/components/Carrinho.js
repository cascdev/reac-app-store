import React from 'react'
import './carrinho.css'
import Produto from './Produto'

const Carrinho = ({ carrinho, agregarProduto }) => ( 

    <div className = "carrinho">

        <h4>Meu carrinho</h4>

        { carrinho.length === 0
            ? <h3>Não tem o produto no carrinho</h3>            
            :carrinho.map( produto => (
                <Produto
                    key={ produto.id }
                    produto={ produto }
                    carrinho={ carrinho }
                    agregarProduto={ agregarProduto }
                />
                )
            )
        }
        
    </div>   
) 
export default Carrinho