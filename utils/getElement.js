const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  else throw new Error('No element selected!!!');
};

export default getElement;
