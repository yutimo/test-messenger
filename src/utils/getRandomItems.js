export default (items, count) => {
  const randomItems = [];

  for (let i = 0; i < count; i++) {
    randomItems.push(items[Math.floor(Math.random() * items.length)]);
  }

  return randomItems;
};
