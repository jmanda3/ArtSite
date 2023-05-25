import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirebaseApp, getApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from "firebase/firestore"; 
import { TableModule } from 'primeng/table';
import { ArtPiece } from 'src/app/shared/models/artPiece';
import { ArtService } from 'src/app/shared/services/art.service';
import { map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { CollectionService } from 'src/app/shared/services/collection.service';
import { MediumService } from 'src/app/shared/services/medium.service';
import { Collection } from 'src/app/shared/models/collection';
import { Medium } from 'src/app/shared/models/medium';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  artPieces: ArtPiece[];
  clonedProducts: { [s: string]: ArtPiece } = {};
  collections: Collection[];
  mediums: Medium[];
  

  constructor(private artService: ArtService, 
    private messageService: MessageService,
    private collectionService: CollectionService,
    private mediumService: MediumService) {
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

   ngOnInit(): void {
     this.artService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.artPieces = data;
    });
   }

   onRowEditInit(piece: ArtPiece) {
    this.clonedProducts[piece.id] = { ...piece };
  }

  onRowEditSave(product: ArtPiece) {
      // if (product.price > 0) {
      //     delete this.clonedProducts[product.id];
      // } else {
        //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        // }
      product.available = Boolean(product.available);
      this.artService.update(product.id, product);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Aert piece is updated' });
  }

  onRowEditCancel(product: ArtPiece, index: number) {
      this.artPieces[index] = this.clonedProducts[product.id];
      delete this.clonedProducts[product.id];
  }

  deleteArtwork(product: ArtPiece, index: number){
    this.artService.delete(product.id);
    this.artPieces.splice(index);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Aert piece is updated' });
  }
}

