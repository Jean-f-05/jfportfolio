import { useState } from 'react';
import * as S from "./styles";
import { ChevronsRight } from '@styled-icons/boxicons-solid'
import { ReactLogo, Html5, Css3, Javascript, Nodejs } from '@styled-icons/boxicons-logos';
import { Mysql, Nextdotjs, Styledcomponents, Jest } from '@styled-icons/simple-icons';

type PortfolioElementProps = {
    text: string,
    imgLink: string,
    url: string
}

const PortfolioElement = ({ text, imgLink, url }: PortfolioElementProps) => {
    const [toggle, setToggle] = useState<boolean | null>(false);
    const variants = {
        open: { rotate: 0 },
        closed: { rotate: 180 },
        empty: { width: 0 },
        fill: { width: "100%" }
    }

    return (
        <S.ElementWrapper>
            <S.Tab onClick={() => setToggle(!toggle)}>
                <S.IconWrapper
                    animate={!toggle ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    <ChevronsRight size={40} color='#D2042D' />
                </S.IconWrapper>
            </S.Tab>
            <S.ImageWrapper>
                <S.DetailsWrapper
                    animate={!toggle ? "empty" : "fill"}
                    variants={variants}
                    transition={{ duration: 0.5 }}>
                    {toggle && <S.DetailsHeader dangerouslySetInnerHTML={{ __html: text }}></S.DetailsHeader>}
                    {toggle && <S.DetailsList>
                        <li>
                            <ReactLogo size={50} color='#36454F' />
                        </li>
                        <li>
                            <Html5 size={50} color='#36454F' />

                        </li>
                        <li>
                            <Styledcomponents size={50} color='#36454F' />
                        </li>
                    </S.DetailsList>}
                    {toggle && (
                        <S.ButtonWrapper>
                            <S.DetailsButton
                                href={url}
                                dangerouslySetInnerHTML={{ __html: "Take a look <span>!</span>" }}
                                target="_blank"
                            >
                            </S.DetailsButton>
                        </S.ButtonWrapper>
                    )}
                </S.DetailsWrapper>
                <S.ElementImage alt='some image' src={imgLink} fill />
            </S.ImageWrapper>
        </S.ElementWrapper >
    )
}

export default PortfolioElement