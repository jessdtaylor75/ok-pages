import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmSpotifyAuthTmPage } from './tm-spotify-auth-tm.page';

describe('TmSpotifyAuthTmPage', () => {
  let component: TmSpotifyAuthTmPage;
  let fixture: ComponentFixture<TmSpotifyAuthTmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmSpotifyAuthTmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmSpotifyAuthTmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
