import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass1DetailsPage } from './pass1-details.page';

describe('Pass1DetailsPage', () => {
  let component: Pass1DetailsPage;
  let fixture: ComponentFixture<Pass1DetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass1DetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass1DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
