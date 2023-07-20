import { iif, fromEvent, of, map } from 'rxjs';

fromEvent(document.querySelector('#check')!, 'change')
  .pipe(
    map((event: Event) => ({
      target: (event.target as HTMLInputElement).id,
      checked: (event.target as HTMLInputElement).checked,
    }))
  )
  .subscribe((checked: { target: string; checked: boolean }) => {
    iif(() => checked.checked, of('CHECKED'), of('UNCHECKED')).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  });
