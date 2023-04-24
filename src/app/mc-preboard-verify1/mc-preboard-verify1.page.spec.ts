import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McPreboardVerify1Page } from './mc-preboard-verify1.page';

describe('McPreboardVerify1Page', () => {
  let component: McPreboardVerify1Page;
  let fixture: ComponentFixture<McPreboardVerify1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McPreboardVerify1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McPreboardVerify1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
