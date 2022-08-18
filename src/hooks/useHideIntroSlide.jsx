import React, { useState, useEffect } from 'react';

const useHideIntroSlide = () => {
    const [hideIntroSlide, setIntroSlideVisibility] = useState(false);

    useEffect(() => setTimeout(() => setIntroSlideVisibility(true), 5000), []);

    return hideIntroSlide;
}

export default useHideIntroSlide;