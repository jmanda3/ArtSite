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
    {name: 'Anchor & Anvil', description: 'Anchor & Anvil Coffee Bar\n9in x 12 | acyrlic paint on canvas"\ncoffee shop in Coraopolis and Ben Avon', url: '../../assets/home_images/scroll_anchoranvil.jpg'},
    {name: 'East End Food Coop', description: 'East End Food Coop\n9in x 12in | acrylic paint on canvas\norganic grocery store located in Point Breeze ', url: '../../assets/home_images/scroll_foodcoop.jpg'},
    {name: 'Giovanni', description: "Giovanni's Pizza & Pasta\n9in x 12in |acyrlic paint on canvas\npizza shop located in Dormont and Downtown", url: '../../assets/home_images/scroll_giovannis.jpg'},
    {name: 'Muddy Cup', description: 'The Muddy Cup\n9in x 12in | acrylic paint on canvas\ncoffee shop located in Dormont and Bellvue', url: '../../assets/home_images/scroll_muddycup.jpg'}
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
    this.setDotColor();
  }

  showNextImage(){
    this.slideIndex++;
    if(this.slideIndex >= this.slides.length) this.slideIndex = 0;
    this.imgUrl = this.slides[this.slideIndex].url;
    this.slide = this.slides[this.slideIndex];
    this.timeLeft = 5;
    this.setDotColor();
  }

  showPreviousImage(){
    this.slideIndex--;
    if(this.slideIndex <= 0 ) this.slideIndex = this.slides.length - 1;
    this.imgUrl = this.slides[this.slideIndex].url;
    this.slide = this.slides[this.slideIndex];
    this.timeLeft = 5;
    this.setDotColor();
  }

  showImage(imageId: number){
    this.slideIndex = imageId;
    this.imgUrl = this.slides[this.slideIndex].url;
    this.slide = this.slides[this.slideIndex];
    this.timeLeft = 5;
    this.setDotColor();
  }

  setDotColor(){
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("selectedDot", "");
    }
    if(dots.length > 0)
      dots[this.slideIndex].className += " selectedDot";
  }


  startTimer() {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.showNextImage();
        }
      },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
