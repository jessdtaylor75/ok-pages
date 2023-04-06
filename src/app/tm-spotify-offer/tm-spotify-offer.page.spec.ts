import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmSpotifyOfferPage } from './tm-spotify-offer.page';

describe('TmSpotifyOfferPage', () => {
  let component: TmSpotifyOfferPage;
  let fixture: ComponentFixture<TmSpotifyOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmSpotifyOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmSpotifyOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
