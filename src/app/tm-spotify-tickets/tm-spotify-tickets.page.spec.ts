import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmSpotifyTicketsPage } from './tm-spotify-tickets.page';

describe('TmSpotifyTicketsPage', () => {
  let component: TmSpotifyTicketsPage;
  let fixture: ComponentFixture<TmSpotifyTicketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmSpotifyTicketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmSpotifyTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
