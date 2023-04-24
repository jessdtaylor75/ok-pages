import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McPreboardGetAppPage } from './mc-preboard-get-app.page';

describe('McPreboardGetAppPage', () => {
  let component: McPreboardGetAppPage;
  let fixture: ComponentFixture<McPreboardGetAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McPreboardGetAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McPreboardGetAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
