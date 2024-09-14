export const saveArrayToLocal = (array, key) => {
  const data = JSON.stringify(array);
  localStorage.setItem(key, data);
};

export const getArrayFromLocal = (key) => {
  const users = localStorage.getItem(key);
  return users ? JSON.parse(users) : null;
};
