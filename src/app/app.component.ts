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
      title: 'Scanner',
      url: '/home-scanner',
      icon: 'scan-outline'
    },
    {
      title: 'MilitaryDeals',
      url: '/app-browser',
      src: '/assets/links-mark.svg'
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
    {
      title: 'MC Sign-in demo',
      url: '/app-browser-first-checkin',
      icon: 'log-in-outline'
    },
    {
      title: 'AP Sign-in demo',
      url: '/app-browser-map',
      icon: 'log-in-outline'
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
