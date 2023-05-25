import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Medium } from '../models/medium';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  dbPath: string = 'Mediums';
  mediums: AngularFirestoreCollection<Medium>;

  constructor(private db: AngularFirestore) {
    this.mediums = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Medium> {
    return this.mediums;
  }

  create(tutorial: Medium): any {
    return this.mediums.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.mediums.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.mediums.doc(id).delete();
  }
}
