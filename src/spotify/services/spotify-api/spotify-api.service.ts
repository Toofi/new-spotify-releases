import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';


@Injectable()
export class SpotifyApiService {

  constructor(private readonly httpService: HttpService) { }

  getNewReleases(): Observable<any> {
    return new Observable(observer => {
      this.httpService.get<any>(`https://api.spotify.com/v1/browse/new-releases`, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.TOKEN}`
        }
      }).subscribe(response => {
        observer.next(response.data.albums.items);
        observer.complete;
      });
    });
  }
}
