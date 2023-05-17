import styled from 'styled-components'
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = styled.nav`
    padding: 1.4rem;
    background-color: #123C73;
    display: block;
    position: fixed;
    width: 100%;
    z-index: 30;
    border-bottom: 3px solid #fff;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled(Link)`
    font-size: 2.4rem;
    color:#F7EDE7;
`

export const Main = styled.main`
    background-color: #F7EDE7;
    padding-top: 7.4rem;
`

export const Hero = styled.div`
    background-color: #F7EDE7;
    overflow-x: hidden;
    height: 41rem;
    position: relative;
    `
export const TypeWriterWrapper = styled.div`
    width: 50%;
    padding: 3rem 0 0 3rem;
`

export const HeroHeader = styled.h2`
    font-size: 2.4rem;
    padding: 3rem 0 0 3rem;
    color: #123C73;

    & span{
        color:#D2042D;
    }  
`

export const MainImage = styled(Image)`
    position: absolute;
    bottom: 0;
    right: -100px !important;
    left: unset !important;
    clip-path: polygon(40% 0, 100% 0, 100% 60%, 100% 100%, 0 100%, 22% 77%, 39% 60%);
   /*  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%); */
    
`

export const PersonalDescription = styled.div`
    background-image: url("/layer.png");
    padding: 2rem 3rem 6rem 3rem;
    scroll-margin-top: 7.4rem;
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
    scroll-margin-top: 7.4rem;
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
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);

    & svg {
        border: 3px solid #123C73;
        background-color: white;
        padding: 0.3rem;    
        box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
   }
`

export const Portfolio = styled.div`
    padding: 2rem 3rem 6rem 3rem;
    background-image: url("/layer2.png");
    background-repeat: repeat-y;
    background-position: right; 
    scroll-margin-top: 7.4rem;
`

export const PortfolioContainer = styled.div`
    max-width: 100rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;

    @media (max-width: 68.75em) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 80rem;
    }

    @media (max-width: 48.12em) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 60rem;
    }

    @media (max-width: 31.25em) {
        grid-template-columns: 1fr;
        max-width: 30rem;
    }

    


`