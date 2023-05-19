import styled from 'styled-components';
import Slider from "react-slick";
import Image from 'next/image';

export const SliderMain = styled(Slider)`

    & .slick-list{
        overflow: unset;
    }
`

export const ThumbImage = styled(Image)`
    max-width: 26rem;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
`