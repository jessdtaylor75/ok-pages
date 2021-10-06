import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      title: 'Profile',
      url: '/profile-home',
      src: '/assets/A-symbol.svg'
    },
    {
      title: 'Personal Info',
      url: '/view-personal-info',
      icon: 'person-circle-outline'
    },
    {
      title: 'Home Scanner',
      url: '/home-scanner',
      icon: 'scan-outline'
    },
    {
      title: 'Verifier Mode',
      url: '/hc-access-scanner',
      icon: 'scan-outline'
    },
    {
      title: 'Clinical Mode',
      url: '/hc-clinical-scanner',
      icon: 'scan-outline'
    },
    {
      title: 'Sample QR Data',
      url: '/qr-sample-data',
      icon: 'qr-code-outline'
    },
    {
      title: 'Legal Agreements',
      url: '/legal-agreements',
      icon: 'document-text-outline'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle-outline'
    },
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'log-in-outline'
    // },
    // {
    //   title: 'Success Login',
    //   url: '/success-login',
    // },
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
