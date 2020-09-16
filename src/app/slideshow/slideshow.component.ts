import { Component, OnInit } from '@angular/core';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css', '../app.component.css']
})
export class SlideshowComponent implements OnInit {

  slide: Slide;
  slides: Slide[] = [
    {Name: 'test', Description: 'Test Name\nTest place\nTest thing', Url: '../../assets/home_images/carousel_01.jpg'},
    {Name: 'test', Description: 'Test Name\nTest place\nTest thing1', Url: '../../assets/home_images/carousel_02.jpg'},
    {Name: 'test', Description: 'Test Name\nTest place\nTest thing2', Url: '../../assets/home_images/carousel_03.jpg'},
    {Name: 'test', Description: 'Test Name\nTest place\nTest thing3', Url: '../../assets/home_images/carousel_04.jpg'},
    {Name: 'test', Description: 'Test Name\nTest place\nTest thing4', Url: '../../assets/home_images/carousel_05.jpg'}
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
    this.imgUrl = this.slides[this.slideIndex].Url;
    this.slide = this.slides[this.slideIndex];
  }

  showNextImage(){
    this.slideIndex++;
    if(this.slideIndex >= this.slides.length -1) this.slideIndex = 0;
    this.imgUrl = this.slides[this.slideIndex].Url;
    this.slide = this.slides[this.slideIndex];
    this.timeLeft = 5;
  }

  showPreviousImage(){
    this.slideIndex--;
    if(this.slideIndex <= 0 ) this.slideIndex = this.slides.length -1;
    this.imgUrl = this.slides[this.slideIndex].Url;
    this.slide = this.slides[this.slideIndex];
    this.timeLeft = 5;
  }

  showImage(imageId: number){
    this.slideIndex = imageId;
    this.imgUrl = this.slides[this.slideIndex].Url;
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
