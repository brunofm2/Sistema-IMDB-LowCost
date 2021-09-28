export class Exception extends Error {
    constructor(
      public httpCode: number,
      public internalCode: string,
      public description: string,
      public context: any,
      clazz: new (...args: any[]) => Exception,
    ) {
      super(description);
      Object.setPrototypeOf(this, clazz.prototype);
    }
  }
  