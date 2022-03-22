import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetStartedMcPage } from './get-started-mc.page';

describe('GetStartedMcPage', () => {
  let component: GetStartedMcPage;
  let fixture: ComponentFixture<GetStartedMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetStartedMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
