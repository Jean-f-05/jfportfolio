import styled, { css } from 'styled-components';

type HeaderProps = {
    align?: "left" | "center" | "right",
    color?: "blue" | "white"
}


export const Header = styled.h3<HeaderProps>`
${({align, color})=>css`
    font-size: 2.2rem;
    color: #F7EDE7;
    text-align: ${align};
    color: ${color === "white"? "#F7EDE7": "#123C73"};

    & span{
        color: #D2042D;
    }
`}
`