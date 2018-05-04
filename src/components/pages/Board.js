import React from 'react'

import { Header, Footer } from '../organisms'
import { ColumnsListContainer } from '../containers'

import './Board.css'

const Board = () => (
    <React.Fragment>
      <Header/>
      <main>
        <ColumnsListContainer/>
      </main>
      <Footer/>
    </React.Fragment>
)

export default Board