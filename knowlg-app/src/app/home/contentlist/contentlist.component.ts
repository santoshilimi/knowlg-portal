import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ContentService } from '../services/content.service';
import  { get } from 'lodash-es'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentlistComponent implements OnInit {
  contentList = [];
  mimeType: any;
  constructor(public router: Router, public contentService: ContentService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mimeType = this.activatedRoute.snapshot.paramMap.get('mimeType');
    const defaultContents = this.contentService.getContenstList(this.mimeType);
    this.contentService.search(this.mimeType).subscribe((data: any) => {
      const contents = get(data, 'result.content');
      console.log(contents, 'contents>>>>>>>>>');
      this.contentList = [...this.contentList, ...contents];
      console.log(this.contentList, 'contentList>>>>>>>>>');
    },
    (err: any) => {
      console.log(err)
      this.contentList = defaultContents;
    } 
    )
  }
  navigateToPlayer(content) {
      this.router.navigate(['/player/', this.mimeType, content.identifier]);
  }
}
