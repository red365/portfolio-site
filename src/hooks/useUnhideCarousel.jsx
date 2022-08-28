import React, { useState, useEffect } from 'react';

const useUnhideCarousel = (durationUntilTransition) => {
    const [carouselShouldBeVisible, setCarouselVisibility] = useState(false);

    useEffect(() => setTimeout(() => setCarouselVisibility(true), 10000), []);

    return carouselShouldBeVisible;
}

export default useUnhideCarousel;