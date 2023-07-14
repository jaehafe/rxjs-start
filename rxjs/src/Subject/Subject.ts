/**
Observable
누군가 구독을 해야 발행을 시작
각 구독자에게 따로 발행
unicast
cold 발행
Netflix */

/**
Subject
개발자가 원하는 때에 발행
모든 구독자에게 똑같이 발행
multicast
hot 발행
TV채널 */

import { Subject } from 'rxjs';

const subject = new Subject();

// subject.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);

setTimeout(() => {
  let x = 0;
  setInterval(() => {
    subject.next(x++);
  }, 2000);
}, 5000); // 5초 후에 2초 간격으로 subject 0부터 ++ 발행

subject.subscribe((x) => console.log('바로구독: ' + x));

setTimeout(() => {
  subject.subscribe((x) => console.log('3초 후 구독: ' + x));
}, 3000);

setTimeout(() => {
  subject.subscribe((x) => console.log('10초 후 구독: ' + x));
}, 10000);

setTimeout(() => {
  subject.subscribe((x) => console.log('14초 후 구독: ' + x));
}, 14000);
