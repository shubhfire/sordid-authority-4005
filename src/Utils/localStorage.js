const getLocalData = (key) => {
  if (key) {
    let data = localStorage.getItem(key);
    return data;
  }
};

const getNameFromLocal = (key) => {
  if (key) {
    let data = localStorage.getItem(key);
    return data;
  }
};

const saveNameInLocal = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};
const saveLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (e) {
    return undefined;
  }
};

const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export {
  getLocalData,
  saveLocalData,
  getNameFromLocal,
  saveNameInLocal,
  saveData,
  loadData,
};
