export const saveToLocal = (array, key) => {
  const data = JSON.stringify(array);
  localStorage.setItem(key, data);
};

export const getFromLocal = (key) => {
  const users = localStorage.getItem(key);
  return users ? JSON.parse(users) : null;
};
