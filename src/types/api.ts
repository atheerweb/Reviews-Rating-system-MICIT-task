export type BaseEntity = {
  id: string;
  date: Date;
};


export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;
