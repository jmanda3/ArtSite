import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../app.component.css'
    ]
})
export class HeaderComponent implements OnInit {

  pageRef: string = "Home"
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //This is getting the path and setting that to the Label at the top to show page
    var urlSegments = window.location.href.split('/'); 
    this.pageRef = urlSegments[urlSegments.length - 1];
    this.pageRef = this.pageRef.charAt(0).toUpperCase() + this.pageRef.slice(1);
  }

}
