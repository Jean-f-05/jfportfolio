import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';


export const Wrapper = styled.div`
   
    width: 100%;
    padding: 1.8rem 2.2rem;
    color: #fff;
    margin-top: 2rem;
    background-image: url("/projectbg.png");
    border: 2px solid #123C73;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 2;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 25rem;
  width: 100%;
`

export const ProjectImage = styled(Image)`

`

export const ProjectHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.5rem;
`

export const ProjectText = styled.h5`
    font-size: 1.7rem;
    font-weight: 500;
`

export const ProjectGit = styled(Link)``

export const ProjectName = styled.strong`
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 500;      
    position: relative;
    
    &::before {
  background-color: #D2042D;

  content: "";
  position: absolute;
  width: calc(100% + 4px);
  height: 100%;
  left: -2px;
  bottom: 0;
  z-index: -1;
  transform: rotate(-2deg);
}
`

export const Description = styled.p`
    font-size: 1.8rem;
    line-height: 1.2;
    margin-top: 0.8rem;
`

export const StickerWrapper = styled.div`
padding: 0.2rem 1rem;
display: inline-block;
background-color: white;
border-radius: 5px;
`

export const Stickers = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 0.5rem;
margin-top: 1rem;
color: #D2042D;
`

export const StickerText = styled.h6`
    font-size: 1.2rem;
    font-weight: 500;
`