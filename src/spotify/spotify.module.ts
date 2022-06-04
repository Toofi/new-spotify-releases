import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SpotifyApiService } from './services/spotify-api/spotify-api.service';
import { SpotifyApiController } from './controllers/spotify-api/spotify-api.controller';

@Module({
  imports: [HttpModule],
  providers: [SpotifyApiService],
  controllers: [SpotifyApiController]
})
export class SpotifyModule { }
