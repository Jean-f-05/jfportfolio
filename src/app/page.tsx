'use client'
import * as S from './styles';
import { MenuFold } from '@styled-icons/remix-fill';


export default function Home() {
  return (
    <>
      <S.Navbar>
        <S.List>
          <S.Header>Jean Francois Portfolio</S.Header>
          <div>
            <MenuFold size={32} color='#F7EDE7' />
          </div>
        </S.List>
      </S.Navbar>
      <S.Main>
        <S.Hero>
          <div>
            <S.HeroHeader>Hello there, I'm Jean! Self-thaught webdeveloper </S.HeroHeader>
          </div>
          <S.MainImage src={"/ilustration_char_1.webp"} alt='image 1' width={250} height={250}></S.MainImage>
        </S.Hero>
      </S.Main>
    </>
  )
}

