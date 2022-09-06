import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from '../home/services/content.service';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-epubplayer',
  templateUrl: './epubplayer.page.html',
  styleUrls: ['./epubplayer.page.scss'],
})
export class EpubplayerPage implements OnInit {
  playerConfig = {};
  constructor(public router: Router, public activatedRoute: ActivatedRoute, public contentService: ContentService) { }

   ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.playerConfig =  this.contentService.preparePlayerConfig(params['id'], params['playerType']);
      console.log(this.playerConfig, 'playerConfigplayerConfigplayerConfigplayerConfig');
    });
  }
  epubPlayerEvent(event) {
    const eventType = _.get(event, 'edata.type');
    switch (eventType) {
      case 'EXIT':
        this.router.navigate(['/home/contentList/epub']);
        break;
    }
    console.log(event, 'eventevent');
  }
}
