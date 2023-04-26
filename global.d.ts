type Writeable<T> = { -readonly [P in keyof T]: T[P] };
type AllOrNone<T> = T | { [K in keyof T]?: never };
type ExtractStrict<T, U extends T> = Extract<T, U>;
type ExcludeStrict<T, U extends T> = Exclude<T, U>;
type ItemOf<U> = U extends (infer T)[] ? T : never;
type Maybe<T> = T | null | undefined;
