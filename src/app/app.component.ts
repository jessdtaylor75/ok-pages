import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//CODE SNIPPET for InlineModal
//SOURCE: https://ionicframework.com/docs/api/modal
//import { Component, ViewChild } from '@angular/core';
//import { IonModal } from '@ionic/angular';
//import { OverlayEventDetail } from '@ionic/core/components';
//
//@Component({
//  selector: 'app-example',
//  templateUrl: 'example.component.html',
//})
//export class ExampleComponent {
//  @ViewChild(IonModal) modal: IonModal;
//
//  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
//  name: string;
//
//  cancel() {
//    this.modal.dismiss(null, 'cancel');
//  }
//
//  confirm() {
//    this.modal.dismiss(this.name, 'confirm');
//  }
//
//  onWillDismiss(event: Event) {
//    const ev = event as CustomEvent<OverlayEventDetail<string>>;
//    if (ev.detail.role === 'confirm') {
//      this.message = `Hello, ${ev.detail.data}!`;
//    }
//  }
//}
//END CODE SNIPPET

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Get Started',
      url: '/get-started',
      icon: 'play-outline'
    },
    {
      title: 'Scanner',
      url: '/home-scanner',
      icon: 'scan-outline'
    },
    {
      title: 'Account',
      url: '/profile-home',
      icon: 'person-outline'
    },
    {
      title: 'Legal Agreements',
      url: '/legal',
      icon: 'document-text-outline'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle-outline'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
