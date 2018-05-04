import React from 'react'

import { Header, Footer } from '../organisms'
import { BoardsListContainer } from '../containers'

const Home = () => (
  <React.Fragment>
    <Header/>
    <main>
      <BoardsListContainer/>
    </main>
    <Footer/>
  </React.Fragment>
)

export default Home