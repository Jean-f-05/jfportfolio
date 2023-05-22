import * as S from "./styles";
import { Github } from '@styled-icons/boxicons-logos';

type ProjectProps = {
    type: "Web App" | "Landing Page",
    name: string,
    description: string,
    linkRef: string,
    stickers: Array<"NextJS" | "React" | "Styled Components" | "Html5" | "Css3" | "Typescript">
    image: ImageProps
}

type ImageProps = {
    alt: string,
    url: string
}

type StickerProps = {
    children: JSX.Element | string | string[],
}
const Sticker = ({ children }: StickerProps) => {
    return (
        <S.StickerWrapper>
            <S.StickerText>{children}</S.StickerText>
        </S.StickerWrapper>
    )
}


const ProjectElement = ({ type, name, description, linkRef, stickers, image }: ProjectProps) => {
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <S.ProjectImage alt={image.alt} src={image.url} fill />
            </S.ImageWrapper>
            <S.ProjectHeader>
                <S.ProjectText>{type}</S.ProjectText>
                <S.ProjectGit href={linkRef} target="_blank">
                    <Github color='#fff' size={28} />
                </S.ProjectGit>
            </S.ProjectHeader>
            <S.ProjectName>
                {name}
            </S.ProjectName>
            <S.Description>
                {description}
            </S.Description>
            <S.Stickers>
                {stickers.map((sticker) => {
                    return <Sticker key={sticker}>{sticker}</Sticker>
                })}

            </S.Stickers>


        </S.Wrapper>)
}

export default ProjectElement