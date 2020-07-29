import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass4Page } from './pass4.page';

describe('Pass4Page', () => {
  let component: Pass4Page;
  let fixture: ComponentFixture<Pass4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
