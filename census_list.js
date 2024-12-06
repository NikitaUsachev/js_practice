function census(list) {
  /* Фильтруем наш массив */
  const male = list.filter((el) => el.gender === "Male");
  /* Если массив пуст, возвращаем undefined */
  if (male.length === 0) return undefined;

  const oldMale = male.sort((a, b) => b.age - a.age)[0];
  return oldMale.name;
}

console.log(
  census([
    { age: 12, name: "Bob", gender: "Male" },
    { age: 37, name: "Liza", gender: "Female" },
    { age: 40, name: "Foo", gender: "Male" },
  ])
); // 'Foo'
console.log(census([{ age: 40, name: "Liza", gender: "Female" }])); // 'undefined'
