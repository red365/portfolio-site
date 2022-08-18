import React, { useState, useEffect } from 'react';

const useIntroSlideContentTransition = () => {
    const [transitionIntroSlideContent, setTransitionIntroSlideContent] = useState(false);

    useEffect(() => setTimeout(() => setTransitionIntroSlideContent(true), 3000), []);

    return transitionIntroSlideContent;
}

export default useIntroSlideContentTransition;