
const fruits = require('../data/fruits');

const index = () => {
    console.log("Daftar Buah:");
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
    console.log(`${name} telah ditambahkan.`);
    index();  
    console.log();  
};


const update = (position, name) => {
    if (position < 0 || position >= fruits.length) {
        console.log("Posisi tidak valid.");
        return;
    }
    fruits[position] = name;
    console.log(`Buah pada posisi ${position} telah diubah menjadi ${name}.`);
    index();  
    console.log();  
};

const destroy = (position) => {
    if (position < 0 || position >= fruits.length) {
        console.log("Posisi tidak valid.");
        return;
    }
    const deleted = fruits.splice(position, 1);
    console.log(`${deleted[0]} telah dihapus.`);
    index();  
    console.log();  
};

module.exports = { index, store, update, destroy };
