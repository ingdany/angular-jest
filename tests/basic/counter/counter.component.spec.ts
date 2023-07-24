import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('Should Create', () => {
    expect(component).toBeTruthy();
  });

  test('Should match with the Snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('Increase By should increase, based on argument (5)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });

  test('Click on buttons, increase and decrease in 1', () => {
    const buttons = compiled .querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);

    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9);
  });

  test('Change the counter must update the h1 tag', () => {
    component.increaseBy(10);
    fixture.detectChanges();
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');
  });

  test('Playing with mocks', () => {
    const mock = jest.fn();
    console.log(mock);
    mock();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(2);
  });
});
