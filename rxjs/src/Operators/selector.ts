import {
  from,
  first,
  last,
  elementAt,
  filter,
  distinct,
  count,
  max,
  reduce,
} from 'rxjs';

const obs$ = from([
  9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2,
]);

obs$.pipe(first()).subscribe((x) => console.log('first: ' + x));
obs$.pipe(last()).subscribe((x) => console.log('last: ' + x));
obs$.pipe(elementAt(5)).subscribe((x) => console.log('elementAt: ' + x));

obs$.pipe(distinct()).subscribe((x) => console.log('distinct: ' + x));
// 몇 가지 숫자 있는지 확인 가능
obs$.pipe(distinct(), count()).subscribe((x) => console.log('distinct: ' + x)); // 10

obs$
  .pipe(filter((x) => x % 2 === 1))
  .subscribe((x) => console.log('filter: ' + x));

// 짝수들 중에서 가장 큰 수
obs$
  .pipe(
    filter((x) => x % 2 === 0),
    max()
  )
  .subscribe((x) => console.log('짝수들 중에서 가장 큰 수: ', x));

// 5보다 큰 3번째 짝수
obs$
  .pipe(
    filter((x) => x > 5),
    filter((x) => x % 2 === 0),
    elementAt(2)
  )
  .subscribe((x) => console.log('5보다 큰 3번째 짝수: ', x));

// 한 번 이상 나온 홀수들의 갯수, 합
obs$
  .pipe(
    distinct(),
    filter((x) => x % 2 === 1),
    reduce((acc, val) => acc + val, 0)
  )
  .subscribe((x) => console.log(x));
