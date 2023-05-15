import styled, {keyframes,css} from 'styled-components';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

export const ElementWrapper = styled.div`
  height: 27rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  border: 3px solid #123C73;
`

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
  background-color: #b3ccdb;

    &:hover{
      cursor: pointer;
    }
`
export const IconWrapper = styled(motion.div)`

`

export const ChevronsRightIcon = styled(motion.svg)`

`

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`

export const DetailsWrapper = styled(motion.div)`
  position: relative;
  z-index: 17;
  height: 100%;
  width: 0;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(255,255,255,0.7120098039215687) 0%, rgba(248,246,246,0.71) 100%);
  overflow-y: hidden;
`;

export const ElementImage = styled(Image)`
    
    `

export const DetailsHeader = styled.h4`
    font-size: 1.8rem;
    color: #123C73; 
    padding: 1rem;

    & span{
      color: #D2042D;
    }
`

export const DetailsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  list-style: none;
`

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`

export const DetailsButton = styled(Link)`
  --c:  #123C73; 
  text-decoration: none;
  
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 1.1rem 1.6rem;
  font-weight: bold;  
  border: none;
  background-color: #b3ccdb;
  color: #123C73;

  &:hover {
  --_p: 100%;
  transition: background-position .4s, background-size 0s;
  color: #fff;
}
`