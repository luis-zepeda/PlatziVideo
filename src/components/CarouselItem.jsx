import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
    <div className="carousel-item">
		<img className="carousel-item__img" src="https://images.unsplash.com/photo-1568322445389-dc9223328f88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="egypt"/>
		<div className="carousel-item__details">
		    <div>
		        <img src="../assets/play_icon.png" alt="play"/>
		        <img src="../assets/plus.png" alt="Plus"/>
		    </div>
		    <p className="carousel-item__details--title">Título descriptivo</p>
		    <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
		</div>
	</div>
);

export default CarouselItem;