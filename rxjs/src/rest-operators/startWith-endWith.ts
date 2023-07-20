import { of, startWith } from 'rxjs';

const obs$ = of(1, 2, 3);

// obs$.pipe(startWith(0)).subscribe(console.log); // 0 1 2 3
obs$.pipe(startWith(-2, -1, 0)).subscribe(console.log);
// -2 -1 0 1 2 3
