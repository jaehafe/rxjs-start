import { throwError } from 'rxjs';

throwError((err: any) => new Error(err)).subscribe({
  next: (v) => console.log(v),
  error: (e) => console.error(e),
  complete: () => console.info('complete'),
});
