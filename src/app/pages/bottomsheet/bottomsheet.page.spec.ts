import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottomsheetPage } from './bottomsheet.page';

describe('BottomsheetPage', () => {
  let component: BottomsheetPage;
  let fixture: ComponentFixture<BottomsheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomsheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottomsheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
