import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyIdSelfiePage } from './verify-id-selfie.page';

describe('VerifyIdSelfiePage', () => {
  let component: VerifyIdSelfiePage;
  let fixture: ComponentFixture<VerifyIdSelfiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyIdSelfiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyIdSelfiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
