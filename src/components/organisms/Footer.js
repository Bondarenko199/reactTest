import React from 'react'

import Container from '../organisms/Container'

import './Footer.css'

import { Logo } from '../atoms'

const Footer = () => (
  <footer className="Footer">
    <Container>
      <Logo/>
    </Container>
  </footer>
)

export default Footer