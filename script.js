let personList = [
    {id: 10, name: 'Vasya', age: 28, child: {name: 'Valera'}},
    {id: 11, name: 'Kolya', age: 78, child: {}},
    {id: 12, name: 'Anna', age: 37, child: {name: 'Sveta'}},
    {id: 13, name: 'Zoya', age: 22, child: {name: 'Sergey'}},
    {id: 14, name: 'Arkadiy', age: 45, child: {}},
];

// Возвращает true, если объект пустой 
function isObjectEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}
// Возвращает true, если нет ребёнка (свойство child является пустым объектом)
function isPersonHasNoChild(person) {
    if (isObjectEmpty(person.child)) {
        return true;
    } else return false;
}
// Добавляет введённое пользователем имя в качестве имени ребёнка
function addChild(parent) {
    parent.child.name = prompt(`Enter the name of ${parent.name}'s child`);
}

for (let person of personList) {
    if (isPersonHasNoChild(person)) {
        addChild(person);
    } 
}

console.log(personList);
