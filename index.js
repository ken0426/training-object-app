const itemObject = {
  items: {
    xxxxxxxx_1111111_zzz: "取らなくてよい",
    xxxxxxxx_2222222_zzz: "取らなくてよい",
    xxxxxxxx_3333333_zzz: "取らなくてよい",
    xxxxxxxx_4444444_zzz: "取らなくてよい",
    xxxxxxxx_5555555_abc: "abcをzzzに変えたい",
    xxxxxxxx_6666666_zzz: "取らなくてよい",
    xxxxxxxx_7777777_zzz: "取らなくてよい",
    xxxxxxxx_8888888_zzz: "取らなくてよい",
    xxxxxxxx_9999999_zzz: "取らなくてよい",
  },
};

const { items } = itemObject;

const objectKeys = Object.keys(items);

const search = "abc";
const LastCharacter = "zzz";
const getItemObjectKey = objectKeys.map((item) => {
  if (item.includes(search) === true) {
    return item.substring(0, item.indexOf(search));
  }
});

const getItem = getItemObjectKey.filter((itemName) => itemName !== undefined);

const item = `${getItem}${LastCharacter}`;

console.log(item);
// xxxxxxxx_5555555_zzz
