import styled from 'styled-components'
import Image from 'next/image';

export const Navbar = styled.nav`
    padding: 1.4rem;
    background-color: #123C73;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.h1`
    font-size: 2rem;
    color:#F7EDE7;
`

export const Main = styled.main`
    height: 60rem;
    background-color: #F7EDE7;
`

export const Hero = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #F7EDE7;
    `
export const HeroHeader = styled.h2`
    font-size: 2rem;
    padding: 3rem 0 0 3rem;
    color: #123C73;
`

export const MainImage = styled(Image)`
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
`