import React, { useState, useEffect } from 'react';

const useHideIntroSlide = (introSlideDuration) => {
    const [hideIntroSlide, setIntroSlideVisibility] = useState(false);

    useEffect(() => setTimeout(() => setIntroSlideVisibility(true), introSlideDuration), []);

    return hideIntroSlide;
}

export default useHideIntroSlide;