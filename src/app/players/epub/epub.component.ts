import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epub',
  templateUrl: './epub.component.html',
  styleUrls: ['./epub.component.scss']
})
export class EpubComponent implements OnInit {

  constructor() { }
  playerConfig = {
    context: {
      mode: 'play',
      authToken: '',
      sid: '7283cf2e-d215-9944-b0c5-269489c6fa56',
      did: '3c0a3724311fe944dec5df559cc4e006',
      uid: 'anonymous',
      channel: '505c7c48ac6dc1edc9b08f21db5a571d',
      pdata: {
        id: 'sunbird.portal',
        ver: '3.2.12',
        pid: 'sunbird-portal.contentplayer'
      },
      contextRollup: {
        l1: '505c7c48ac6dc1edc9b08f21db5a571d'
      },
      tags: [
        ''
      ],
      cdata: [],
      timeDiff: 0,
      objectRollup: {},
      host: '',
      endpoint: '',
      userData: {
        firstName: 'Sourav',
        lastName: 'Dey'
      }
    },
    config: {
      traceId: '123456',
      sideMenu: {
        showShare: true,
        showDownload: true,
        showReplay: false,
        showExit: false,
      }
    },
    metadata: {
      compatibilityLevel: 4,
      copyright: 'Kendriya_Vidyalaya,2020',
      keywords: ['epub'],
      subject: ['Science'],
      language: ['English'],
      mimeType: 'application/epub',
      objectType: 'Content',
      gradeLevel: ['Class 10'],
      appIcon: 'https://preprodall.blob.core.windows.net/ntp-content-preprod/content/do_2130944360583331841866/artifact/book.jpg',
      primaryCategory: 'Course Assessment',
      // tslint:disable-next-line:max-line-length
      artifactUrl: 'https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/assets/do_2132118800055091201207/kehs102.epub',
      contentType: 'SelfAssess',
      identifier: 'do_21312960731822489612047',
      audience: ['Student'],
      visibility: 'Default',
      mediaType: 'content',
      osId: 'org.ekstep.quiz.app',
      languageCode: ['en'],
      license: 'CC BY 4.0',
      name: 'EPUB_229.epub',
      attributions: ['kanmani'],
      status: 'Live',
      code: '49f3ea6d-db45-a4a7-fcd6-daf58785c7db',
      description: 'epub',
      // tslint:disable-next-line:max-line-length
      streamingUrl: 'https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21312960731822489612047/artifact/index.epub',
      medium: ['English'],
      createdOn: '2020-10-15T04:14:28.339+0000',
      lastUpdatedOn: '2020-10-15T04:19:30.101+0000',
      originData: {
        identifier: 'do_21312917869280460814945',
        repository: 'https://dock.preprod.ntp.net.in/api/content/v1/read/do_21312917869280460814945'
      },
      creator: 'classmate2',
      pkgVersion: 1,
      versionKey: '1602735570101',
      createdBy: '7ff59e4d-0f4f-4f25-8244-969423e91a16',
      board: 'CBSE',
      resourceType: 'Learn',
      orgDetails: {},
      licenseDetails: {
        name: 'CC BY 4.0',
        url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
        description: 'For details see below:'
      }
    }
  };

  ngOnInit(): void {
  }

  onEnter(artifactUrl: string) {
    const metadata = this.playerConfig.metadata;
    metadata.streamingUrl = artifactUrl;
    const config = this.playerConfig;
    this.playerConfig = undefined;
    setTimeout(() => {
      this.playerConfig = {...config, metadata};
    }, 3000);
  }

  playerEvents(event) {

  }
  playerTelemetryEvents(event) {

  }
}
