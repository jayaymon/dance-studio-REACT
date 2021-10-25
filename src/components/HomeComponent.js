import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

function HomeCarousel({items}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    }

    const slides = items.map(item => {
    return (
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}>
        <img className="d-block w-100" src={item.image} alt={item.altImgText} />
        <CarouselCaption captionText={item.description} captionHeader={item.title} />
        </CarouselItem>
    );
    });

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-md-10 mx-auto">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </div>
        </div>
    );
    
}

function Home(props) {
    return (
        <HomeCarousel items={props.homeCarousel} />
    );
}

export default Home;