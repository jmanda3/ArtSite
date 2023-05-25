import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { Collection } from 'src/app/shared/models/collection';
import { Medium } from 'src/app/shared/models/medium';
import { CollectionService } from 'src/app/shared/services/collection.service';
import { MediumService } from 'src/app/shared/services/medium.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: [MessageService]
})
export class ManageComponent {
  @ViewChild('mediumForm') mediumForm: NgForm;
  @ViewChild('collectionForm') collectionForm: NgForm;
  collections: Collection[];
  mediums: Medium[];
  canUpload: boolean = true;
  uploadingMedium: boolean = false;
  uploadingCollection: boolean = false;
  medium: Medium;
  collection: Collection;

  constructor(
    private mediumService: MediumService,
    private collectionService: CollectionService,
    private messageService: MessageService
  ) {
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

  addMedium(){
    this.mediumService.create(this.medium);
    this.mediumForm.reset();
    this.uploadingMedium = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Medium Created' });
  }

  addCollection(){
    this.collectionService.create(this.collection);
    this.collectionForm.reset();
    this.uploadingCollection = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Collection Created' });
  }

  toggleAddMedium(){
    this.uploadingMedium = !this.uploadingMedium;
    if(this.uploadingMedium){
      this.medium = new Medium();
    }
  }

  toggleAddCollection(){
    this.uploadingCollection = !this.uploadingCollection;
    if(this.uploadingCollection){
      this.collection = new Collection();
    }
  }
}
