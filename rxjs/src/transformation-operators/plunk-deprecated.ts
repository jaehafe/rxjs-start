// @deprecated — Use map and optional chaining: pluck('foo', 'bar') is map(x => x?.foo?.bar)
// 'pluck' is deprecated.ts(6385)

import { from, map, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// const obs$ = from([
//   { name: 'apple', price: 1200, info: { category: 'fruit' } },
//   { name: 'carrot', price: 800, info: { category: 'vegetable' } },
//   { name: 'pork', price: 5000, info: { category: 'meet' } },
//   { name: 'milk', price: 2400, info: { category: 'drink' } },
// ]);

// obs$.pipe(map((item) => item?.info?.category)).subscribe(console.log);

const obs$ = ajax(`https://api.github.com/search/users?q=user:jaehafe`).pipe(
  map((res: any) => res.response?.items[0]?.avatar_url as string)
);

obs$.subscribe(console.log);
