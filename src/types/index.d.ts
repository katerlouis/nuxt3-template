// see: https://stackoverflow.com/a/73237686/3632679

export {
  // MyType, // why is that necessary? Most examples export an empty object here
};

declare global {
  // 
  interface MyType {
    foo: string,
    bar?: number[],
  }
}
