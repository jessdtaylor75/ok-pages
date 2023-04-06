import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmDestinationArtistSelectPage } from './tm-destination-artist-select.page';

describe('TmDestinationArtistSelectPage', () => {
  let component: TmDestinationArtistSelectPage;
  let fixture: ComponentFixture<TmDestinationArtistSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmDestinationArtistSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmDestinationArtistSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
