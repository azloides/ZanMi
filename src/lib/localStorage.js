export const saveArrayToLocal = (array, key) => {
  const data = JSON.stringify(array);
  localStorage.setItem(key, data);
};

export const getArrayFromLocal = (key) => {
  const users = localStorage.getItem(key);
  return users ? JSON.parse(users) : null;
};

export const saveCountToLocal = (count, key) => {
  const data = JSON.stringify(count);
  localStorage.setItem(key, data);
};

export const getCountFromLocal = (key) => {
  const count = localStorage.getItem(key);
  return count ? JSON.parse(count) : null;
};
