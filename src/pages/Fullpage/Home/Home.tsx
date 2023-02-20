import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import st from './home.module.scss';

const Home: React.FC = () => {
    const home = useRef<any>();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const homeTl = gsap.timeline({ paused: true });
            homeTl.fromTo('.' + [st.content], { opacity: 0, duration: 1 }, { opacity: 1, duration: 1 });
            setTimeout(() => {
                homeTl.play();
            }, 2300);
        }, home);
        console.log('start');

        return () => ctx.revert();
    }, [location]);

    return (
        <div className={st.home} ref={home}>
            <div className={st.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora doloribus laborum, labore
                dolores autem laudantium, ex voluptatibus dicta voluptas delectus repellat? Ratione ad nam, minima natus
                atque voluptatem nemo?
            </div>
        </div>
    );
};
export default Home;
