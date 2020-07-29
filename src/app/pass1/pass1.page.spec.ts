import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass1Page } from './pass1.page';

describe('Pass1Page', () => {
  let component: Pass1Page;
  let fixture: ComponentFixture<Pass1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
