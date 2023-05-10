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
    font-size: 2.4rem;
    color:#F7EDE7;
`

export const Main = styled.main`
    background-color: #F7EDE7;
`

export const Hero = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #F7EDE7;
    overflow-x: hidden;
    `
export const HeroHeader = styled.h2`
    font-size: 2.4rem;
    padding: 3rem 0 0 3rem;
    color: #123C73;

    & span{
        color:red;
    }
`

export const MainImage = styled(Image)`
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    margin-right: -100px;
`

export const PersonalDescription = styled.div`
    background-image: url("/layer.png");
    padding: 2rem 3rem 6rem 3rem;
`

export const Paragraph = styled.p`
    font-size: 1.8rem;
    color:#F7EDE7;

    & span{
        color:#D2042D;
    }  
`

export const Images = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;   
`

export const ThumbImage = styled(Image)`
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
`

export const StackDescription = styled.div`
    padding: 2rem 3rem 6rem 3rem;
    background-color: #FFF;
    position: relative;
    background-color: #F9F6F1;
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(18, 60, 115, 0.73)),
    url("/lighthouse.webp");

   
    background-size: contain;
    background-repeat: no-repeat;
    background-position:bottom;
   
`

export const SectionImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
`

export const SectionList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    margin-top: 2rem;
`

export const ListEl = styled.li`
    z-index: 15;

    & svg {
        border: 3px solid #123C73;
        background-color: white;
        padding: 0.3rem;    
   }
`