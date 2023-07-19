import { throttleTime } from 'rxjs';
import { clicks$ } from './debounceTime';

// leading: true, trailing: false,
// 먼저 입력한 값이 무조건 출력,
clicks$
  .pipe(
    throttleTime(1000, undefined, {
      leading: true,
      trailing: false,
    })
  )
  .subscribe((x) => console.log('OUTPUT: -------- ' + x));

// leading: false, trailing: true
// 먼저 입력한 값이 아닌 그 뒤애 입력한 값이 출력

// clicks$
//   .pipe(
//     throttleTime(1000, undefined, {
//       leading: false,
//       trailing: true,
//     })
//   )
//   .subscribe((x) => console.log('OUTPUT: -------- ' + x));

// leading: true, trailing: true
// 둘 다 true이면 앞의 값, 뒤의 값 출력

// clicks$
//   .pipe(
//     throttleTime(1000, undefined, {
//       leading: true,
//       trailing: true,
//     })
//   )
//   .subscribe((x) => console.log('OUTPUT: -------- ' + x));
