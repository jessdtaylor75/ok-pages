import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmMediaAppArtistPage } from './tm-media-app-artist.page';

describe('TmMediaAppArtistPage', () => {
  let component: TmMediaAppArtistPage;
  let fixture: ComponentFixture<TmMediaAppArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmMediaAppArtistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmMediaAppArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
