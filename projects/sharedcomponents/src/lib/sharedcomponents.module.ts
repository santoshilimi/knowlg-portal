import { NgModule } from '@angular/core';
import { SharedcomponentsComponent } from './sharedcomponents.component';
import { PdfplayerComponent } from './pdfplayer/pdfplayer.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { EpubplayerComponent } from './epubplayer/epubplayer.component';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
@NgModule({
  declarations: [SharedcomponentsComponent, PdfplayerComponent, EpubplayerComponent],
  imports: [ SunbirdPdfPlayerModule, SunbirdEpubPlayerModule
  ],
  exports: [SharedcomponentsComponent, PdfplayerComponent, EpubplayerComponent]
})
export class SharedcomponentsModule { }
