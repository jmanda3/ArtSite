import { CdkColumnDef } from '@angular/cdk/table';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
import { collection } from '../models/collection';
import { image } from '../models/image';
import collectionsJson from '../../assets/collections.json';
import mediumsJson from '../../assets/mediums.json';
import { medium } from '../models/medium';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MatTableComponent implements OnInit, OnDestroy {

  @Input() collectionName;
  @Input() imagesOriginal: image[];
  defaultSort = 'date';
  imagesModified: image[];
  colArray = [];
  rowArray = [];
  imageGrid;
  colums = 3;
  rows = 10;
  perPage = 30;
  paginationIndex = 0;
  pageSizeOptions: number[] = [15, 30, 60];
  pageEvent: PageEvent;
  collections: collection[];
  mediums: medium[];

  //Filter and sort info
  selectedFilterOption: string;
  selectedFilterValue: string;
  selectedSortOption: string;

  //Lightbox info
  imageIndex: any = -1;
  showFullscreen: any = false;

  constructor() { }

  ngOnInit() {
    this.collections = collectionsJson;
    this.mediums = mediumsJson;
    this.imagesModified = this.imagesOriginal;
    this.selectedSortOption = this.defaultSort;
    this.initImageArray();
    if(this.collectionName !== '' && this.collectionName !== null && this.collectionName !== undefined){
      this.filterImages('collection', this.collectionName);
      this.selectedFilterOption = 'collection';
      this.selectedFilterValue = this.collectionName;
    }
    //this.filterImages('collection', 'john collection1')
    //this.filterImages('medium', 'paint1')
  }

  ngOnDestroy(): void {
  }

  onResize(event) {
    var width = event.target.innerWidth;
    if(width >= 1200){
      this.colums = 3;
    }
    if(width < 1200){
       this.colums = 2;
    }
    if(width < 800){
      this.colums = 1;
    }
    this.initImageArray();
  }

  calculateTable(){
    var index = this.paginationIndex * this.perPage;
    var pageTotal = index * this.perPage;
    if(this.imagesModified.length >= pageTotal){
      this.rows = Math.ceil(this.perPage / this.colums);
    }
    else{
      this.rows = Math.ceil(this.imagesModified.length / this.colums);
    }
  }

  initImageArray(){
    this.calculateTable();
    this.colArray = [];
    this.rowArray = [];
    for(let i = 0; i<this.colums; i++){
      this.colArray.push(i);
    }
    for(let i = 0; i<this.rows; i++){
      this.rowArray.push(i);
    }
    this.sortImages(this.defaultSort);
  }

  setupImageTable(){
    //document.querySelector('#top').scrollIntoView({ behavior: 'smooth', block: 'center' });
    var index = this.paginationIndex;
    //this.imageGrid = image[][];
    this.imageGrid = Array(this.rows).fill(null).map(()=>Array(this.colums).fill(null));
    for(let r = 0; r <this.rows; r++){
      for(let c = 0; c <this.colums; c++){
        if(index == (this.paginationIndex + this.perPage)) break;
        if(this.imagesModified !== null && this.imagesModified !== undefined && this.imagesModified[index] !== null && this.imagesModified[index] !== undefined){
          this.imageGrid[r][c] = this.imagesModified[index];
          index++;
        }
        else{
          break;
        }
      }
    }
  }

  updatePage(e: any){
    this.perPage = e.pageSize;
    this.paginationIndex = e.pageIndex * this.perPage;
    this.setupImageTable();
    return e;
  }

  sortImages(sortOptions: string){
    if(sortOptions === 'date') {
      this.imagesModified = this.imagesModified.sort((a: image, b: image) => {
        if(new Date(b.dateOfCreation) > new Date(a.dateOfCreation)) return 1;
        if(new Date(b.dateOfCreation) < new Date(a.dateOfCreation)) return -1;
        return 0;
      });
    }
    else if(sortOptions === 'dateAsc') {
      this.imagesModified = this.imagesModified.sort((a: image, b: image) => {
        if(new Date(a.dateOfCreation) > new Date(b.dateOfCreation)) return 1;
        if(new Date(a.dateOfCreation) < new Date(b.dateOfCreation)) return -1;
        return 0;
      });
    }
    else if(sortOptions === 'title'){
      this.imagesModified = this.imagesModified.sort((a: image, b: image) => {
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
      });
    }    
    this.setupImageTable();
  }

  filterImages(filterOptions: string, filterValue){
    if(filterOptions.toUpperCase() === 'COLLECTION' && filterValue !== ''){
      this.imagesModified = this.imagesOriginal.filter(i => {
        return i.collection.toUpperCase() === filterValue.toUpperCase();
      });
    }
    else if(filterOptions.toUpperCase() === 'MEDIUM' && filterValue !== ''){
      this.imagesModified = this.imagesOriginal.filter(i => {
        return i.medium.toUpperCase() === filterValue.toUpperCase();
      });
    }
    else{
      this.imagesModified = this.imagesOriginal;
    }
    this.sortImages(this.selectedSortOption);
    this.setupImageTable();
  }

  filerValueChanged(){
    this.filterImages(this.selectedFilterOption, this.selectedFilterValue);
  }
  
  filterOptionChanged(){
    this.filerValueChanged();
  }

  sortChanged(value){
    this.sortImages(value)
  }

  showFullScreen(row, column) {
    //var row1 = 
    //var index = (row*this.colums + (column - this.colums - 1));
    var index = row * this.colums + column;
    this.imageIndex = index;
    this.showFullscreen = true;
  }

  closeEventHandler() {
    this.showFullscreen = false;
    this.imageIndex = -1;
  }

}
