// 마지막 값을 저장 후 추가 구독자에게 발행

import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(0); // 초기값 설정

subject.subscribe((x) => console.log('A: ' + x));

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe((x) => console.log('B: ' + x));

subject.next(4);
subject.next(5);

// subject가 마지막으로 발행한 값을 얻을 수 있다.
const lastValue = subject.getValue();
console.log(lastValue);
