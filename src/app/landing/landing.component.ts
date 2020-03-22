import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor() { }

  ngOnInit() {
    $('#btnHome').click(function() {
      $('html,body').animate({
          scrollTop: $('#divHome').offset().top},
          'slow');
    });
    $('#btnAbout').click(function() {
      $('html,body').animate({
          scrollTop: $('#divAbout').offset().top},
          'slow');
    });
    $('#btnContact').click(function() {
      $('html,body').animate({
          scrollTop: $('#divContact').offset().top},
          'slow');
    });
  }
  sendEmail(){
    

  }

}
