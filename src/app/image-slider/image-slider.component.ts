import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',standalone: true,
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    '/images/halfwholepieces2.jpg',
    '/images/photo-1440778303588-435521a205bc.avif',
    '/images/photo-1502301197179-65228ab57f78.avif',
    '/images/photo-1622396481328-9b1b78cdd9fd.avif',


  ];

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  prevImage(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }


  nextImage(): void {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}

