import { Component, OnInit, Input } from '@angular/core';
import { emailUser } from '../models/emailUser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css', '../app.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() title;
  form;
  emailUser: emailUser;

  constructor() {
    this.emailUser = new emailUser();
   }


  ngOnInit() {
    this.form = document.getElementById("emailForm");

    this.form.addEventListener("submit", function(ev) {
      ev.preventDefault();

      this.form = document.getElementById("emailForm");

      var data = new FormData(this.form);
      var xhr = new XMLHttpRequest();
      xhr.open(this.form.method, this.form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        } else {
        }
      };
      xhr.send(data);
      this.form.reset();
      alert("Email Sent Successfully!");
      });
  }

}
