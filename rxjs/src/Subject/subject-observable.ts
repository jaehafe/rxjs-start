import { interval, Subject } from 'rxjs';

const subject = new Subject();
const obs$ = interval(1000);

obs$.subscribe(subject);
// obs$.subscribe((x) => {
//   subject.next(x);
// });

subject.subscribe((x) => console.log('바로구독: ' + x));

setTimeout(() => {
  subject.subscribe((x) => console.log('3초 후 구독: ' + x));
}, 3000);

setTimeout(() => {
  subject.subscribe((x) => console.log('5초 후 구독: ' + x));
}, 5000);

setTimeout(() => {
  subject.subscribe((x) => console.log('10초 후 구독: ' + x));
}, 10000);

// 다른 시기에 구독을 시작한 observer들이 같은 값을 발행받도록 할 때 Subject 사용
