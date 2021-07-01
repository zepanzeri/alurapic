import { Component } from '@angular/core';
import { Photo } from './photos/Photo';
import { PhotoService } from './photos/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alurapic';
  photos: Photo[] = [];

  constructor(photoService: PhotoService){
    photoService.listFromUser('flavio')
      .subscribe((photos: Photo[]) => this.photos = photos);
  }
}
