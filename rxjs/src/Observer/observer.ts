import { from } from 'rxjs';

const observable$ = from([1, 2, 3, 4, 5]);

const observer = {
  next: console.log,
  error: (err: Error) => console.error('빌행중 오류', err),
  complete: () => console.log('발행물 완결'),
};

observable$.subscribe(observer);

// 부분 지정 가능
const observer_1 = {
  next: console.log,
  error: (err: Error) => console.error('발행중 오류', err),
};
observable$.subscribe(observer_1);

console.log('--------------');

const observer_2 = {
  next: console.log,
};
observable$.subscribe(observer_2);
