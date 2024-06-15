const arrind = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];
console.log(arrind);


const book1 = {
    title: "Le Rouge et le Noir",
    pageCount: "544",
    genre: "socio-psychological novel"
};
console.log(book1);



book1.authors = [
    {
        name: "Stendhal",
        age: "59"
    }
];
console.log(book1.authors);



const users = [];

for(let i = 1; i <= 10; i++) {
    const user = {
        name: `Імя ${i}`,
        username: `Користувач ${i}`,
        password: `Пароль ${i}`
    };
    users.push(user);
}
console.log(users)

users.forEach(user => {
    console.log(`Пароль користувача ${user.username}: ${user.password}`);
});

