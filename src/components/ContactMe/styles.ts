import styled from 'styled-components';
import Link from 'next/link';

export const Wrapper = styled.div`

    position: fixed;
    bottom: 2rem;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 1rem 2rem;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const LinkEl = styled(Link)`
height: 100%;
width: 100%;
display: block;
`