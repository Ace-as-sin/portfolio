import React, { useState, useEffect } from "react";
import "./carousel.scss";

const Carousel = (props) => {
	const { carouselArray } = props;
	const [windowWidth, setWindowWidth] = useState(0);
	const [carouselPosition, setCarouselPosition] = useState(0);
	const [swipePosition, setSwipePosition] = useState(0);
	let position = props.position || 0;
	let carouselItemWidth = props.carouselItemWidth || 150;
	let showCarouselPostition = props.showCarouselPostition || true;
	const carouselItemSpacing = props.carouselItemSpacing || 20;
	useEffect(() => {
		const updatedWindowWidth = window.innerWidth;
		setWindowWidth(updatedWindowWidth);

		window.addEventListener("resize", setWindowWidth(updatedWindowWidth));
	}, []);

	const navigateCarouselPosition = (direction) => {
		let limiter = Math.floor(windowWidth - (carouselItemSpacing * 2) / (carouselItemSpacing + carouselItemWidth));
		if (limiter === 0) {
			limiter = 1;
		}
		if (direction + carouselPosition > 0 || direction + carouselPosition < -1 * carouselArray.length + limiter) {
			return;
		}
		setCarouselPosition(direction + carouselPosition);
	};

	const handleTouchStart = (startPosition) => {
		setSwipePosition(startPosition);
	};

	const handleTouchEnd = (endPosition) => {
		const mousePositionDifference = swipePosition - endPosition;
		const carouselMovingDirection = Math.floor(-mousePositionDifference / carouselItemWidth);
		navigateCarouselPosition(carouselMovingDirection);
	};

	const cardPositioningObj = {
		windowWidth,
		carouselPosition,
		position,
	};

	const handleCardPositioning = (obj, index) => {
		const { carouselPosition, justifyContent, position } = obj;
		let style = `calc(${position}px + (${index} * ${carouselItemSpacing}px)`;

		switch (justifyContent) {
			case "left":
				style = `calc(${position}px - (${carouselItemWidth}px / 2) + (${index} + ${carouselPosition}) * (${carouselItemWidth} + ${carouselItemSpacing}))`;
				break;
			case "center":
				style = `calc(${50}% - (${carouselItemWidth}px / 2) + (${index} + ${carouselPosition}) * (${carouselItemWidth} + ${carouselItemSpacing}))`;
				break;
			case "custom%":
				style = `calc(${position}% - (${carouselItemWidth}px / 2) + (${index} + ${carouselPosition}) * (${carouselItemWidth} + ${carouselItemSpacing}))`;
				break;
			default:
				return style;
		}
		return style;
	};

	return (
		<div className="carousel--outer-container">
			<div className="carousel--container" onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)} onTouchEnd={(e) => handleTouchEnd(e.touches[0].clientX)} onMouseDown={(e) => handleTouchStart(e.clientX)} onMouseUp={(e) => handleTouchEnd(e.clientX)}>
				{carouselArray.map((carouselObject, i) => {
					const style = {
						transition: "0.35s",
						position: "relative",
						left: `${handleCardPositioning(cardPositioningObj, i)}`,
					};
					return (
						<div className={"carousel-item--outer-container"} key={i} props={carouselObject.props} style={style}>
							<a href={carouselObject.link} style={{ color: carouselObject.color }}>
								<img src={carouselObject.img} alt={carouselObject.alt} />
								<h3>{carouselObject.title}</h3>
							</a>
						</div>
					);
				})}
			</div>
			{showCarouselPostition ? (
				<div className="carousel--show-position-container">
					{carouselArray.map((_el, i) => {
						if (i === -carouselPosition) {
							return (
								<div
									className="carousel--carousel-position active"
									key={i}
									onClick={() => {
										setCarouselPosition(-i);
									}}
								/>
							);
						}
						return (
							<div
								className="carousel--carousel-position"
								key={i}
								onClick={() => {
									setCarouselPosition(-i);
								}}
							/>
						);
					})}
				</div>
			) : null}
		</div>
	);
};

export default Carousel;
