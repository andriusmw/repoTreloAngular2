import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarTareasComponent } from './filtrar-tareas.component';

describe('FiltrarTareasComponent', () => {
  let component: FiltrarTareasComponent;
  let fixture: ComponentFixture<FiltrarTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
