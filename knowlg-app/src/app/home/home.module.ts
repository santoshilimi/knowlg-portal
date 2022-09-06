import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PlayerslistComponent } from './playerslist/playerslist.component';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { SharedcomponentsModule } from 'sharedcomponents';
import { ContentService } from './services/content.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedcomponentsModule,
    HomePageRoutingModule
  ],
  providers: [ContentService],
  declarations: [HomePage, PlayerslistComponent, ContentlistComponent]
})
export class HomePageModule {}
