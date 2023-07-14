import { interval } from 'rxjs';

const obs$ = interval(1000);
const subscription = obs$.subscribe(console.log);

setTimeout((_: unknown) => subscription.unsubscribe(), 5500); // 구독중인 상태를 5.5초 뒤에 해제

setTimeout(() => obs$.subscribe(console.log), 7500); // 해제 후 2초 뒤 다시 구독 시작
