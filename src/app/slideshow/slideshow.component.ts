import { Component, OnInit } from '@angular/core';
import { slide } from '../models/slide';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css', '../app.component.css']
})
export class SlideshowComponent implements OnInit {

  slide: slide;
  slides: slide[] = [
    {name: 'test', description: 'Test Name\nTest place\nTest thing', url: '../../assets/home_images/scroll_anchoranvil.jpg'},
    {name: 'test', description: 'Test Name\nTest place\nTest thing1', url: '../../assets/home_images/scroll_foodcoop.jpg'},
    {name: 'test', description: 'Test Name\nTest place\nTest thing2', url: '../../assets/home_images/scroll_giovannis.jpg'},
    {name: 'test', description: 'Test Name\nTest place\nTest thing3', url: '../../assets/home_images/scroll_muddycup.jpg'}
  ]
  slideIndex: number = 0;
  imgUrl: string = "";
  timeLeft: number = 5;
  interval;

  constructor() { }

  ngOnInit() {
    this.initSlider();
  }

  initSlider(){
    this.slideIndex = 0;
    this.startTimer();
    this.imgUrl = this.slides[this.slideIndex].url;
    this.slide = this.slides[this.slideIndex];
  }

  showNextImage(){
    this.slideIndex++;
    if(this.slideIndex >= this.slides.length -1) this.slideIndex = 0;
    this.imgUrl = this.slides[this.slideIndex].url;
    this.slide = this.slides[this.slideIndex];
    this.timeLeft = 5;
  }

  showPreviousImage(){
    this.slideIndex--;
    if(this.slideIndex <= 0 ) this.slideIndex = this.slides.length -1;
    this.imgUrl = this.slides[this.slideIndex].url;
    this.slide = this.slides[this.slideIndex];
    this.timeLeft = 5;
  }

  showImage(imageId: number){
    this.slideIndex = imageId;
    this.imgUrl = this.slides[this.slideIndex].url;
    this.slide = this.slides[this.slideIndex];
  }


  startTimer() {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.showNextImage();
          this.timeLeft = 5;
        }
      },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
