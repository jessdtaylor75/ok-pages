import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass3DetailsPage } from './pass3-details.page';

describe('Pass3DetailsPage', () => {
  let component: Pass3DetailsPage;
  let fixture: ComponentFixture<Pass3DetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass3DetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass3DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
