'use client'
import SectionHeader from '../components/SectionHeader/index';
import { MenuFold, Close } from '@styled-icons/remix-fill';
import { ReactLogo, Html5, Css3, Javascript, Nodejs } from '@styled-icons/boxicons-logos';
import { Mysql, Nextdotjs, Styledcomponents, Jest } from '@styled-icons/simple-icons';
import PortfolioElement from "../components/PortfolioElement/index"
import * as S from './styles';
import { useState, useRef } from 'react';
import Menu from '@/components/Menu';
import TypeWriter from "../components/Typewriter/index"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whoSection = useRef(null);
  const stackSection = useRef(null);
  const portfolioSection = useRef(null);

  return (
    <>
      <S.Navbar>
        <S.List>
          <S.Header href={"/"}>Jean&apos;s Portfolio</S.Header>
          <div>
            {menuOpen ? <Close size={32} color='#F7EDE7' onClick={() => { setMenuOpen(!menuOpen) }} /> : <MenuFold size={32} color='#F7EDE7' onClick={() => { setMenuOpen(!menuOpen) }} />}
          </div>
        </S.List>
      </S.Navbar>
      <S.Main>
        <Menu isOpen={menuOpen} setMenu={setMenuOpen} sections={{ whoSection, stackSection, portfolioSection }} />
        <S.Hero>
          <S.TypeWriterWrapper>
            <TypeWriter />
          </S.TypeWriterWrapper>
          {<S.MainImage src={"/hero.webp"} alt='image 1' height={400} width={400}></S.MainImage>}
        </S.Hero>
        <S.PersonalDescription ref={whoSection}>
          <SectionHeader text="Who am I <span> ? </span>" />
          <S.Paragraph>Born in Luxembourg<span>, </span> living in Portugal<span>. </span> Because one picture is worth a thousand words<span>, </span>
            Check the carousel below to know more about me<span> .</span>
          </S.Paragraph>
          <S.Images>
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a dog with a red bandana near the shore' src={"/dogo.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a coder working sitting at his desk' src={"/desk.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a gamer playing a videogame with enthusiasm' src={"/gamer.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a basketball player aiming at the hoop' src={"/basket.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a book and a hot coffee' src={"/bookandcoffee.webp"} />
          </S.Images>
        </S.PersonalDescription>
        <S.StackDescription ref={stackSection}>
          <SectionHeader text="The Stack<span>...</span>" color="blue" />
          <S.SectionList>
            <S.ListEl>
              <ReactLogo size={85} color='#ADD8E6' />
            </S.ListEl>
            <S.ListEl>
              <Html5 size={85} color='#FF5733' />
            </S.ListEl>
            <S.ListEl>
              <Css3 size={85} color='#6082B6' />
            </S.ListEl>
            <S.ListEl>
              <Javascript size={85} color='#FFD700' title={"Javascript Icon"} />
            </S.ListEl>
            <S.ListEl>
              <Nodejs size={85} color='#478778' title={"NodeJs Icon"} />
            </S.ListEl>
            <S.ListEl>
              <Mysql size={85} color='#6F8FAF' title={"Mysql Icon"} />
            </S.ListEl>
            <S.ListEl>
              <Nextdotjs size={85} color='#353935' title={"NextJs Icon"} />
            </S.ListEl>
            <S.ListEl>
              <Styledcomponents size={85} color='#353935' title={"Styled Components Icon"} />
            </S.ListEl>
            <S.ListEl>
              <Jest size={85} color='#A95C68' title={"Styled Components Icon"} />
            </S.ListEl>
          </S.SectionList>
        </S.StackDescription>
        <S.Portfolio ref={portfolioSection}>
          <SectionHeader text='My Portfolio <span> !</span>' align='left' color='blue' />
          <S.PortfolioContainer>
            <PortfolioElement
              key={"portfolio1"}
              text="My version of the pokedex<span>.</span> Built from scratch<span>,</span> 100% original design<span>!</span>"
              imgLink="/dogo.webp"
              url="https://stellular-pasca-997184.netlify.app/"
            />
            <PortfolioElement
              key={"portfolio2"}
              text="My version of the pokedex<span>.</span> Built from scratch<span>,</span> 100% original design<span>!</span>"
              imgLink="/dogo.webp"
              url="https://stellular-pasca-997184.netlify.app/"

            />
            <PortfolioElement
              key={"portfolio2"}
              text="My version of the pokedex<span>.</span> Built from scratch<span>,</span> 100% original design<span>!</span>"
              imgLink="/dogo.webp"
              url="https://stellular-pasca-997184.netlify.app/"

            />
            <PortfolioElement
              key={"portfolio2"}
              text="My version of the pokedex<span>.</span> Built from scratch<span>,</span> 100% original design<span>!</span>"
              imgLink="/dogo.webp"
              url="https://stellular-pasca-997184.netlify.app/"

            />
            {/*  <PortfolioElement key={"portfolio2"} /> */}
          </S.PortfolioContainer>
        </S.Portfolio>
      </S.Main >

    </>
  )
}

