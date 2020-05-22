import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTestPage } from './add-test.page';

describe('AddTestPage', () => {
  let component: AddTestPage;
  let fixture: ComponentFixture<AddTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
