const messages = [
    "Oscar",
    "Ana",
    "Nicolas",
    "Yesica",
    "Diego",
    "Juan",
    "Jose"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

// SENTENCIA QUE EXPORTA UN METODO
module.export = { randomMsg };