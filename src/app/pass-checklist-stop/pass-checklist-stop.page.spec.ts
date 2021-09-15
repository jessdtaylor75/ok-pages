import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassChecklistStopPage } from './pass-checklist-stop.page';

describe('PassChecklistStopPage', () => {
  let component: PassChecklistStopPage;
  let fixture: ComponentFixture<PassChecklistStopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassChecklistStopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassChecklistStopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
