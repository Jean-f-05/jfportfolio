import styled, { css } from 'styled-components';

type HeaderProps = {
    align?: "left" | "center" | "right"
}


export const Header = styled.h3<HeaderProps>`
${({align})=>css`
    font-size: 2.2rem;
    color: #F7EDE7;
    text-align: ${align};

    & span{
        color:red;
    }
`}
`