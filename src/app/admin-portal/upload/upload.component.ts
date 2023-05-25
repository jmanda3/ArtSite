import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { image } from 'src/app/models/image';
import { ArtPiece } from 'src/app/shared/models/artPiece';
import { Collection } from 'src/app/shared/models/collection';
import { Medium } from 'src/app/shared/models/medium';
import { ArtService } from 'src/app/shared/services/art.service';
import { CollectionService } from 'src/app/shared/services/collection.service';
import { MediumService } from 'src/app/shared/services/medium.service';
import { UploadFileService } from 'src/app/shared/services/upload-file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent {
  @ViewChild('artForm') artForm: NgForm;
  @ViewChild('thumbnailForm') thumbnailForm: FileUpload;
  @ViewChild('mainImageForm') mainImageForm: FileUpload;
  artpiece: ArtPiece;
  thumbnailImage : File;
  mainImage : File;
  canUpload: boolean;
  mediums: Medium[];
  collections : Collection[];

  constructor(
    private artService: ArtService, 
    private messageService: MessageService, 
    private uploadFileService: UploadFileService,
    private mediumService: MediumService,
    private collectionService: CollectionService) {
    this.artpiece = new ArtPiece();
    this.canUpload = true;
    this.collectionService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.collections = data;
    });
    this.mediumService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.mediums = data;
    });
  }

  submitForm(){
    this.canUpload = false;
    //upload images first then call this
    if(this.mainImage && this.thumbnailImage){
      let mainExtension = this.mainImage.name.split('.').pop();
      let thumbnailExtension = this.mainImage.name.split('.').pop();
      let imageName = this.artpiece.title.toLowerCase().replaceAll(' ', '') + "_" + Date.now().toString();
      let thumbnailImageName = "thumbnail_" + imageName;
  
      const newFile = new File([this.mainImage], imageName + '.' + mainExtension, { type: this.mainImage.type });
      const newFile1 = new File([this.thumbnailImage], thumbnailImageName + '.' + thumbnailExtension, { type: this.thumbnailImage.type });
  
      forkJoin([this.uploadFileService.uploadFile(newFile), this.uploadFileService.uploadFile(newFile1)]).subscribe(result => {
        if(result[0] === true && result[1] === true){
          this.uploadArtPieceToDb(thumbnailImageName, imageName);
        }
      });
      
    }
    else{
      this.uploadArtPieceToDb("", "");
    }
  }

  private uploadArtPieceToDb(thumbnailImageName: string, imageName: string) {
    this.artpiece.available = Boolean(this.artpiece.available);
    this.artpiece.thumbnailImage = thumbnailImageName;
    this.artpiece.image = imageName;
    this.artService.create(this.artpiece).then(data => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Art piece created' });
      this.artForm.reset();
      this.thumbnailForm.clear();
      this.mainImageForm.clear();
      this.thumbnailImage = null;
      this.mainImage = null;
      this.canUpload = true;
    }, err => {
      this.messageService.add({ severity: 'error', summary: 'Success', detail: 'Aert piece failed to create' });
      this.canUpload = true;
    });
  }

  thumbnailSelected(event: any){
    this.thumbnailImage = event.files[0];
  }

  imageSelected(event: any){
    this.mainImage = event.files[0];
  }
}
