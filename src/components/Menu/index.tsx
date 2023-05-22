import * as S from "./styles";

type MenuProps = {
    isOpen: boolean,
    setMenu: (value: boolean) => void,
    sections: any
}

const Menu = ({ isOpen, setMenu, sections }: MenuProps) => {

    const variants = {
        open: { opacity: 1, x: 0, width: '100%' },
        closed: { opacity: 0, x: "-100%", width: 0 },
    }

    const handleElementClick = (e: any) => {
        e.preventDefault()
        const item = e.target.id;
        setMenu(false);
        sections[item].current.scrollIntoView({ block: 'start', behavior: "smooth" })
    }

    return (
        <S.MenuWrapper
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
            <S.MenuList>
                <li>
                    <S.MenuElement
                        onClick={(e) => handleElementClick(e)}
                        id={"whoSection"}>
                        Who am I <span>?</span>
                    </S.MenuElement>
                </li>
                <li>
                    <S.MenuElement
                        onClick={(e) => handleElementClick(e)}
                        id={"stackSection"}>
                        The stack <span>...</span>
                    </S.MenuElement>
                </li>
                <li>
                    <S.MenuElement
                        onClick={(e) => handleElementClick(e)}
                        id={"portfolioSection"}>
                        My Portfolio <span>!</span>
                    </S.MenuElement>
                </li>

            </S.MenuList>
        </S.MenuWrapper >
    )
}

export default Menu