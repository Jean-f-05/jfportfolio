'use client'
import styled from 'styled-components'
import { MenuFold } from '@styled-icons/remix-fill'

const Header = styled.h1`
color:red;`

export default function Home() {
  return (
    <nav>
      <ul>
        <Header>John Francis </Header>
        <div><MenuFold /></div>
      </ul>
    </nav>
  )
}

