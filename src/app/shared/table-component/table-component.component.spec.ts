import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponentComponent } from './table-component.component';
import { NzTableModule } from 'ng-zorro-antd/table';

describe('TableComponentComponent', () => {
  let component: TableComponentComponent;
  let fixture: ComponentFixture<TableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponentComponent],
      imports: [NzTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
