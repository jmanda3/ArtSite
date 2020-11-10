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
  //displayFullNav = 'block';
  displaySmallNav = 'none;'
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //This is getting the path and setting that to the Label at the top to show page
    var urlSegments = window.location.href.split('/'); 
    this.pageRef = urlSegments[urlSegments.length - 1];
    this.pageRef = this.pageRef.charAt(0).toUpperCase() + this.pageRef.slice(1);
    this.displaySmallNav = 'none;';
  }

  close(){
    this.displaySmallNav = 'none';
  }

  open(){
    if(this.displaySmallNav === 'block'){
      this.displaySmallNav = 'none';
    }
    else{
      this.displaySmallNav = 'block';
    }
  }

  toggleMenu(){
    var x = document.getElementById("mobileNav");
    if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
    }
}
