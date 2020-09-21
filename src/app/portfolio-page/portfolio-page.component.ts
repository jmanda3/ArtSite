import { Component, OnInit } from '@angular/core';
import { image } from '../models/image';
import imagesJson from '../../assets/images.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css', '../app.component.css']
})
export class PortfolioPageComponent implements OnInit {

  images: image[];
  collectionName = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.images = imagesJson
    this.route.queryParams.subscribe(params => {
      this.collectionName = params['collection'];
    });
  }

}
