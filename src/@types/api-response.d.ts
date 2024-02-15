export type Response<T> = {
  meta: {
    results: T;
    status_code: number;
  };
};
