import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass2DetailsPage } from './pass2-details.page';

describe('Pass2DetailsPage', () => {
  let component: Pass2DetailsPage;
  let fixture: ComponentFixture<Pass2DetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass2DetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass2DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
