import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { DataService } from './data.service';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let dataServiceMock: Partial<DataService>;

  beforeEach(() => {
    dataServiceMock = {
      fetchData: jest.fn().mockResolvedValue('Mocked Data'),
    };

    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from the service and display it', () => {
    // Mock the fetchData method of the DataService to return a specific value
    fixture.detectChanges();
    console.log(component.data)
    expect(component.data).toBe('Mocked Data');
    expect(dataServiceMock.fetchData).toHaveBeenCalledTimes(1);
    
  });
});
