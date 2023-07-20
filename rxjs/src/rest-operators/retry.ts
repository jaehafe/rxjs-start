import { range, mergeMap, retry, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

range(1, 20)
  .pipe(
    mergeMap((keyword) =>
      ajax(`http://127.0.0.1:3000/people/quarter-error/${keyword}`).pipe(
        map((item: any) => item.response.first_name),
        retry(3)
      )
    )
  )
  .subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete'),
  });
