import React from 'react'
import Header from '../../components/header/Header'
import Sorted from '../../components/sorted/Sorted'
import Footer from '../../components/footer/Footer'

function SortedRoutes() {
  return (
    <div className='sorted_routes'>
        <Header/>
        <Sorted/>
        <Footer/>
    </div>
  )
}

export default SortedRoutes