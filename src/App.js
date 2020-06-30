import React, { Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

  
const App = () =>  {

  const ano = new Date().getFullYear()

  return (
    <Fragment>
    
      <Header 
        titulo='Loja Virtual React!'
      />

      <Footer 
        ano={ano} 
      /> 

    </Fragment> 
  )
}
 
  
    



export default App

