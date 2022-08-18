import React, { useState, useEffect } from 'react';

const useUnhideCarousel = () => {
    const [carouselShouldBeVisible, setCarouselVisibility] = useState(false);

    useEffect(() => setTimeout(() => setCarouselVisibility(true), 5500), []);

    return carouselShouldBeVisible;
}

export default useUnhideCarousel;