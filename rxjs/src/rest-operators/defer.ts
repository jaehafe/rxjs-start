import { defer, fromEvent, map, of } from 'rxjs';

// 구독하는 순간에 조건에 따른 스트림을 생성
fromEvent(document.getElementById('check')!, 'change')
  .pipe(
    map((event: Event) => ({
      target: (event.target as HTMLInputElement).id,
      checked: (event.target as HTMLInputElement).checked,
    }))
  )
  .subscribe((checked: { target: string; checked: boolean }) => {
    defer(() => (checked.checked ? of('CHECKED') : of('UNCHECKED'))).subscribe(
      console.log
    );
  });
