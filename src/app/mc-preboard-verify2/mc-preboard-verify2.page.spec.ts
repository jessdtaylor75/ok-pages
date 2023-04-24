import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McPreboardVerify2Page } from './mc-preboard-verify2.page';

describe('McPreboardVerify2Page', () => {
  let component: McPreboardVerify2Page;
  let fixture: ComponentFixture<McPreboardVerify2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McPreboardVerify2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McPreboardVerify2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
