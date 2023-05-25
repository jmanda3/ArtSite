import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ArtPiece } from '../models/artPiece';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }  

  public uploadFile(file: File): Observable<boolean> {  
    const functionURI = 'https://fileupload20230303112655.azurewebsites.net/api/uploadfile';  
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });  

    const formData = new FormData();
    formData.append('File', file, file.name);
    formData.append('Key', "6b4fb527-f84b-4d9e-865f-a9eb4f187b4b");

    return this.http.post<boolean>(functionURI, formData);
  }
}
