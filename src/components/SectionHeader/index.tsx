import * as S from "./styles"

export type SectionHeaderProps = {
    text: string,
    align?: "left" | "center" | "right"
}


const SectionHeader = ({ text, align = "left" }: SectionHeaderProps) => {
    return (
        <S.Header align={align} dangerouslySetInnerHTML={{ __html: text }}></S.Header>
    )
}

export default SectionHeader;