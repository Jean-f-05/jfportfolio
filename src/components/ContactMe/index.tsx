import * as S from "./styles";
import { Github } from '@styled-icons/boxicons-logos';
import { MailSend } from '@styled-icons/remix-fill';


const ContactMe = ({ }) => {
    return (
        <S.Wrapper>
            <S.List>
                <li>

                    <S.LinkEl href={"https://github.com/Jean-f-05"} target='_blank'>
                        <Github size={40} color='#000' />
                    </S.LinkEl>
                </li>
                <li>

                    <S.LinkEl href="mailto:jean_f_05@hotmail.com?subject=JF Portfolio Contact">
                        <MailSend size={40} color='#000' />
                    </S.LinkEl >

                </li>
            </S.List>

        </S.Wrapper>)
}

export default ContactMe;