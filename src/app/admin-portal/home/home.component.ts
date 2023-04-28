import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirebaseApp, getApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from "firebase/firestore"; 
import { TableModule } from 'primeng/table';
import { ArtPiece } from 'src/app/shared/models/artPiece';
import { ArtService } from 'src/app/shared/services/art.service';
import { map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  artPieces: ArtPiece[];
  clonedProducts: { [s: string]: ArtPiece } = {};
  

  constructor(private artService: ArtService, private messageService: MessageService) {
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

