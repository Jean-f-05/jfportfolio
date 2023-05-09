'use client'
import * as S from './styles';
import { MenuFold } from '@styled-icons/remix-fill';



export default function Home() {
  return (
    <S.Navbar>
      <ul>
        <S.Header>John Francis </S.Header>
        <div>
          <MenuFold />
        </div>
      </ul>
    </S.Navbar>
  )
}

