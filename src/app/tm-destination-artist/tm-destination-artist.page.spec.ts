import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmDestinationArtistPage } from './tm-destination-artist.page';

describe('TmDestinationArtistPage', () => {
  let component: TmDestinationArtistPage;
  let fixture: ComponentFixture<TmDestinationArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmDestinationArtistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmDestinationArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
