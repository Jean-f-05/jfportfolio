import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (<Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('Hello there, I&apos;m Jean<span>!</span> Front-end developer<span>.</span> ')
                .pauseFor(1000)
                .typeString('36 years old')
                .pauseFor(1700)
                .changeDeleteSpeed(0.4)
                .deleteChars(12)
                .typeString('With the looks of a 25 years old<span>.</span> ')
                .pauseFor(1000)
                .typeString('Under my belt, around 3 years of experience<span>.</span>')
                /* .pauseFor(1000) */
                /*  .changeDeleteSpeed(0.1) */
                /* .deleteChars(122) */
                .start();
        }}
    />)
}

export default TypeWriter