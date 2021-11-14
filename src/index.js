const messages = [
    "Oscar",
    "Ana",
    "Nicolas",
    "Yesica",
    "Diego",
    "Juan",
    "Jose",
    "Pedro"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

// SENTENCIA QUE EXPORTA UN METODO
module.exports = { randomMsg };