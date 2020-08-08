import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {handelInit} from './js/main';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  @ViewChild('canvasFrame', { static: true }) canvasContainer: ElementRef;
  title = 'three.js demo';
  canvasWidth = 500;
  canvasHeight = 500;
  constructor(){

  }
  ngOnInit(): void{
    this.init();
  }
  init(): void{
    handelInit(this);
  }
}
