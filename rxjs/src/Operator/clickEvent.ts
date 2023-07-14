import { fromEvent, map, tap } from 'rxjs';

const observable$ = fromEvent(document, 'click');

observable$
  .pipe(
    tap(console.log),
    map((e: MouseEvent) => e.x + ' ' + e.y)
  )
  .subscribe((x) => console.log(x, '발행'));
