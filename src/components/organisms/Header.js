import React from 'react'

import { Logo } from '../atoms'
import Container from './Container'

import './Header.css'

const Header = () => (
  <header className="Header">
    <Container>
      <Logo/>
    </Container>
  </header>
)

export default Header