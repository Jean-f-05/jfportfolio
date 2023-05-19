import * as S from "./styles";
import settings from './settings';
const Carousel = () => {
    return (
        <S.SliderMain {...settings}>
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a dog with a red bandana near the shore' src={"/dogo.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a coder working sitting at his desk' src={"/desk.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a gamer playing a videogame with enthusiasm' src={"/gamer.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a basketball player aiming at the hoop' src={"/basket.webp"} />
            <S.ThumbImage height={230} width={230} alt='a watercolor painting of a book and a hot coffee' src={"/bookandcoffee.webp"} />

        </S.SliderMain>
    )
}


export default Carousel;

