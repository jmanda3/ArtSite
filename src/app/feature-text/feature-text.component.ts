import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-text',
  templateUrl: './feature-text.component.html',
  styleUrls: ['./feature-text.component.css', '../app.component.css']
})
export class FeatureTextComponent implements OnInit {

  @Input() title;
  @Input() message;
  @Input() imagePath
  
  constructor() { }

  ngOnInit() {
  }

}
