export class AppError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export const PhoneRegex =
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

export const SkeletonColors = ['#181A22', '#3B3D45', '#181A22'];
