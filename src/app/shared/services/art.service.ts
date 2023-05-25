import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ArtPiece } from '../models/artPiece';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  dbPath: string = 'ArtPieces';
  artPieces: AngularFirestoreCollection<ArtPiece>;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {
    this.artPieces = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<ArtPiece> {
    return this.artPieces;
  }

  create(tutorial: ArtPiece): any {
    return this.artPieces.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.artPieces.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.artPieces.doc(id).delete();
  }
}
