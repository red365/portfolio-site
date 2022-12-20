import React, { useState, useEffect } from 'react';

const useCarousel = (durationUntilTransition) => {
    const [carouselShouldBeVisible, setCarouselVisibility] = useState(false);

    useEffect(() => setTimeout(() => setCarouselVisibility(true), durationUntilTransition), []);

    return carouselShouldBeVisible;
}

export default useCarousel;