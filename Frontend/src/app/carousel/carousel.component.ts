import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  slides = [
    {
      img: 'https://media.rawg.io/media/screenshots/aeb/aebf3897b74f2f0b07e1eda6126e871b.jpg',
    },
    {
      img: 'https://media.rawg.io/media/screenshots/e92/e922e92ab7f9ee87c72d8adf21255761.jpg',
    },
    {
      img: 'https://media.rawg.io/media/screenshots/37f/37f26757871568da6e61e85af8a565d4.jpg',
    },
    {
      img: 'https://media.rawg.io/media/screenshots/aeb/aebf3897b74f2f0b07e1eda6126e871b.jpg',
    },
    {
      img: 'https://media.rawg.io/media/screenshots/e92/e922e92ab7f9ee87c72d8adf21255761.jpg',
    },
    {
      img: 'https://media.rawg.io/media/screenshots/37f/37f26757871568da6e61e85af8a565d4.jpg',
    },
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoPlay: true,
    autoPlaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
