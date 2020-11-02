import { Component, OnInit } from '@angular/core';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  
  collectionName = 'Local Eats';

  constructor() { }
  ngOnInit(): void {
  }

}
