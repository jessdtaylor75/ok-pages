import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestSuccessPage } from './test-success.page';

describe('TestSuccessPage', () => {
  let component: TestSuccessPage;
  let fixture: ComponentFixture<TestSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
