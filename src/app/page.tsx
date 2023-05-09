'use client'
import SectionHeader from '../components/SectionHeader/index';
import { MenuFold } from '@styled-icons/remix-fill';
import * as S from './styles';


export default function Home() {
  return (
    <>
      <S.Navbar>
        <S.List>
          <S.Header>Jean&apos;s Portfolio</S.Header>
          <div>
            <MenuFold size={32} color='#F7EDE7' />
          </div>
        </S.List>
      </S.Navbar>
      <S.Main>
        <S.Hero>
          <div>
            <S.HeroHeader>Hello there, I&apos;m Jean<span>! </span> Self-thaught web developer<span>. </span> </S.HeroHeader>
          </div>
          <S.MainImage src={"/ilustration_char_1.webp"} alt='image 1' width={400} height={420}></S.MainImage>
        </S.Hero>
        <S.PersonalDescription>
          <SectionHeader text="Who am I <span> ? </span>" />
          <S.Paragraph>Born in Luxembourg<span>, </span> living in Portugal<span>. </span> Because one picture is worth a thousand words<span>, </span>
            Check the carousel below to know more about me<span> .</span>
          </S.Paragraph>
          <S.Images>
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a dog with a red bandana near the shore' src={"/dog.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a coder working sitting at his desk' src={"/desk.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a gamer playing a videogame with enthusiasm' src={"/gamer.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a basketball player aiming at the hoop' src={"/basket.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a book and a hot coffee' src={"/bookandcoffee.webp"} />
          </S.Images>
        </S.PersonalDescription>

      </S.Main>

    </>
  )
}

