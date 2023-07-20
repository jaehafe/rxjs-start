import { every, of } from 'rxjs';

// 모든 발행물들이 주어진 조건에 부합하는가 여부

of(1, 3, 5, 7, 9, 11, 13, 15)
  .pipe(every((x) => x % 2 !== 0))
  .subscribe(console.log);
