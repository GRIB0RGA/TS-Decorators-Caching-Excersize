export const expiredOrNot = (
  cacheDate: number,
  providedMins: number,
  user: any
) => {
  const remainingTime = (Date.now() - cacheDate) / 60000;
  if (cacheDate) {
    console.log(
      `${Math.floor(
        Math.abs((remainingTime - providedMins) * 60)
      )} seconds until User ${user.id} cache is cleared `
    );
  }

  return remainingTime > providedMins;
};
