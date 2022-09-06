import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpubplayerPage } from './epubplayer.page';

const routes: Routes = [
  {
    path: '',
    component: EpubplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpubplayerPageRoutingModule {}
