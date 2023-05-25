import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { image } from '../models/image';
import { ArtPiece } from '../shared/models/artPiece';

@Component({
  selector: 'app-fullscreen-image-viewer',
  templateUrl: './fullscreen-image-viewer.component.html',
  styleUrls: ['./fullscreen-image-viewer.component.css']
})
export class FullscreenImageViewerComponent implements OnInit {

  @Input() images: ArtPiece[];
  @Input() imageIndex: number;
  @Input() show: boolean = false;
  @Output() close: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  nextArrowClicked(){
    this.imageIndex++;
    if(this.imageIndex >= this.images.length) this.imageIndex = 0;
  }

  previousArrowClicked(){
    this.imageIndex--;
    if(this.imageIndex < 0) this.imageIndex = this.images.length -1;
  }

  closeClicked(): void {
    this.close.emit();
  }

}
