const raw = {
  item1: { key: 'sdfd', value:'sdfd' },
  item2: { key: 'sdfd', value:'sdfd' },
  item3: { key: 'sdfd', value:'sdfd' }
};

const allowed = ['item1', 'item3'];

const filtered = Object.keys(raw)
  .filter(key => !allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});

console.log(filtered);
