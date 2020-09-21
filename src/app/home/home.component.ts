import { Component, OnInit } from '@angular/core';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  
  collectionName = 'collection1';

  constructor() { }
  ngOnInit(): void {
  }

}
