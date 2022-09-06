import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpubplayerPageRoutingModule } from './epubplayer-routing.module';

import { EpubplayerPage } from './epubplayer.page';
import { SharedcomponentsModule } from 'sharedcomponents';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedcomponentsModule,
    EpubplayerPageRoutingModule
  ],
  declarations: [EpubplayerPage]
})
export class EpubplayerPageModule {}
