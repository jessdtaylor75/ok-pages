import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassChecklistPage } from './pass-checklist.page';

describe('PassChecklistPage', () => {
  let component: PassChecklistPage;
  let fixture: ComponentFixture<PassChecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassChecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
