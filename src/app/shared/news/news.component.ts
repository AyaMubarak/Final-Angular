import { Component, OnInit } from '@angular/core';
import { ImageSliderComponent } from "../../image-slider/image-slider.component";
import { CommonModule } from '@angular/common';

interface NewsItem {
  title: string;
  description: string;

}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  standalone: true,
  styleUrls: ['./news.component.css'],
  imports: [ImageSliderComponent,CommonModule]
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [
    { title: 'Best Spots For A Summer Vacation', description: 'Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!' },

  ];

  ngOnInit(): void {
    
  }
}

