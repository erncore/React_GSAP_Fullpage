import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router';

// utils
import dot from '../../utils/dot';

// styles
import st from './transition.module.scss';

const Transiton: React.FC = () => {
    const container = useRef<any>();
    const location = useLocation();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const layerTl = gsap.timeline({ paused: true });

            const layerInitState = {
                transformOrigin: 'bottom left',
                transform: 'scaleY(0) translateX(-50%)',
                duration: 0.5,
            };
            const layerFinalState = {
                transformOrigin: 'top left',
                transform: 'scaleY(0) translateX(-50%)',
                duration: 0.5,
            };
            const bgInitState = {
                opacity: 0,
                duration: 0.5,
            };
            const bgFinalState = {
                transformOrigin: 'right top',
                transform: 'scaleX(0) translateX(-50%)',
                duration: 0.8,
            };
            const containerFinalState = {
                opacity: 0,
                visibility: 'hidden',
                duration: 0.5,
            };

            layerTl
                .from(dot([st.bg]), bgInitState)
                .from(dot([st.layer]), layerInitState)
                .to(dot([st.layer]), layerFinalState)
                .to(dot([st.bg]), bgFinalState)
                .to(container.current, containerFinalState);

            layerTl.play();
        }, container);

        return () => ctx.revert();
    }, [location]);

    return (
        <div className={st.container} ref={container}>
            <div className={st.bg}></div>
            <div className={st.layer}></div>
        </div>
    );
};
export default Transiton;
