import * as S from "./styles"

export type SectionHeaderProps = {
    text: string,
    color?: "blue" | "white",
    align?: "left" | "center" | "right",
}


const SectionHeader = ({ text, align = "left", color = "white" }: SectionHeaderProps) => {
    return (
        <S.Header align={align} dangerouslySetInnerHTML={{ __html: text }} color={color}></S.Header>
    )
}

export default SectionHeader;