import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-images',
  templateUrl: './feature-images.component.html',
  styleUrls: ['./feature-images.component.css', '../app.component.css']
})
export class FeatureImagesComponent implements OnInit {

  @Input() image1;
  @Input() image2;
  @Input() image3;

  constructor() { }

  ngOnInit() {
  }

}
