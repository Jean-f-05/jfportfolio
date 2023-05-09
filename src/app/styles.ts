import styled from 'styled-components'
import Image from 'next/image';
import layer from "../../public/layer.svg"


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
    height: 60rem;
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

export const Description = styled.div`
    background-image: url("/layer.png");
    padding: 2rem 3rem 3rem 3rem;
    margin-bottom: 3rem;
    position: relative;
    
    /* & :before{
        content: url("/11.png");
        position: absolute;
        bottom: 0;
        left: 0;
        clip-path: circle(50% at 50% 50%);
    } */
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