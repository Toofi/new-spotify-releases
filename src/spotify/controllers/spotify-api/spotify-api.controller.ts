import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SpotifyApiService } from 'src/spotify/services/spotify-api/spotify-api.service';

@Controller('spotify-api')
export class SpotifyApiController {

  constructor(private readonly spotifyApiService: SpotifyApiService) { }

  @Get(':newReleases')
  getNewReleases() {
    return new Observable(observer => {
      this.spotifyApiService.getNewReleases().subscribe(result => {
        observer.next(result);
        observer.complete();
      });
    });
  }
}
