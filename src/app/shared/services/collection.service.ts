import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Collection } from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  dbPath: string = 'Collections';
  collections: AngularFirestoreCollection<Collection>;

  constructor(private db: AngularFirestore) {
    this.collections = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Collection> {
    return this.collections;
  }

  create(tutorial: Collection): any {
    return this.collections.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.collections.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.collections.doc(id).delete();
  }
}
