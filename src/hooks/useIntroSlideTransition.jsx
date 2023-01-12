import React, { useState, useEffect } from 'react';

const useIntroSlideTransition = () => {
    const introSlideDisplayDuration = 5000;
    const introSlideTransitionDuration = 1700;
    const [introSlideTransitionStage, setIntroSlideTransitionStage] = useState("display-intro-slide");

    useEffect(() => setTimeout(() => {
        setIntroSlideTransitionStage("transition-intro-slide");
        setTimeout(() => {
            setIntroSlideTransitionStage("hide-intro-slide")
        }, introSlideTransitionDuration);
    }, introSlideDisplayDuration), []);

    return introSlideTransitionStage;
}

export default useIntroSlideTransition;