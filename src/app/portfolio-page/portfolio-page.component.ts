import { Component, OnInit } from '@angular/core';
import { image } from '../models/image';
import imagesJson from '../../assets/images.json';
import { ActivatedRoute } from '@angular/router';
import { ArtService } from '../shared/services/art.service';
import { ArtPiece } from '../shared/models/artPiece';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css', '../app.component.css']
})
export class PortfolioPageComponent implements OnInit {

  artPieces: ArtPiece[];
  collectionName = '';
  constructor(
    private route: ActivatedRoute,
    private artService: ArtService) { }

  ngOnInit() {
    //this.images = imagesJson
    this.artService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.artPieces = data;
    });
    
    this.route.queryParams.subscribe(params => {
      this.collectionName = params['collection'];
    });
  }

}
