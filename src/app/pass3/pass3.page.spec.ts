import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass3Page } from './pass3.page';

describe('Pass3Page', () => {
  let component: Pass3Page;
  let fixture: ComponentFixture<Pass3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
