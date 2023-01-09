import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input()  
  public path:string; 

  constructor() { }

  ngOnInit(): void {
  }

  public getPath() {
    return this.path;
  }
  public setPath(value) {
    this.path = value;
  }

}
