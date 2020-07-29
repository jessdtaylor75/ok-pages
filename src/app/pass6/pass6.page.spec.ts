import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass6Page } from './pass6.page';

describe('Pass6Page', () => {
  let component: Pass6Page;
  let fixture: ComponentFixture<Pass6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
