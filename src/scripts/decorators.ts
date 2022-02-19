import { expiredOrNot } from "./helpers";

export const memo = (minutes: number) => {
  const cache = new Map();

  return function (_: any, __: string, descriptor: PropertyDescriptor): any {
    const originalMethod = descriptor.value;

    descriptor.value = async (...args: number[]) => {
      const key = args[0];
      const user = cache.get(key);
      const expiredProp = cache.get(key)?.expired;
      const expired = expiredOrNot(expiredProp, minutes, user);

      if (cache.has(key) && !expired) {
        console.log(`Got user through cache`);
        return user;
      }
      const objToCache = await originalMethod.call(this, ...args);
      if (objToCache) {
        cache.set(key, { ...objToCache, expired: Date.now() });
        console.log(`Got user through getUserById`);
        return objToCache;
      }
    };
    return descriptor;
  };
};
