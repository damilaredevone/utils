export type Awaitable<T> = T | PromiseLike<T>;
export type Nullable<T> = T | null | undefined;
export type Arrayable<T> = T | Array<T>;

export type Fn<T = void, D = any> = (value?: any, defaultValue?: D) => T;
