import { of, distinctUntilChanged, from } from 'rxjs';

// 같은 값이 연속되는 것만 제외

of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 3, 4, 4, 1)
  .pipe(distinctUntilChanged())
  .subscribe(console.log);

const students = [
  { name: '이이이', sex: 'male' },
  { name: '이이김', sex: 'male' },
  { name: '김김김', sex: 'female' },
  { name: '김이이', sex: 'female' },
  { name: '이김이', sex: 'male' },
];
from(students)
  .pipe(distinctUntilChanged((a, b) => a.sex === b.sex))
  .subscribe(console.log);
