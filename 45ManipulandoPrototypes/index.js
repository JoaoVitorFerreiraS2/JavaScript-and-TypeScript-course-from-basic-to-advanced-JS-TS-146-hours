// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
}

Object.setPrototypeOf(objB, objA); // Aqui definimos que o __proto__ do objB é o do objA



