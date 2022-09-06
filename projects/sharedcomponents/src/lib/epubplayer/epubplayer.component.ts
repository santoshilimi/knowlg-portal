import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-epubplayer',
  templateUrl: './epubplayer.component.html',
  styleUrls: ['./epubplayer.component.css']
})
export class EpubplayerComponent implements OnInit {

  @Input() playerConfig;
  @Output() epubPlayerEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  epubEventHandler(event) {
    this.epubPlayerEvent.emit(event);
  }

  playerTelemetryEvents(event) {
    this.epubPlayerEvent.emit(event);
  }
}
