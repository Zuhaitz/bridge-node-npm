const Logger = require("logplease");
const numbers = require("./numbers.js");

const logger = Logger.create("utils");

const numberList = [2, 3, 101, 201, 202, 100];

numberList.forEach((n) => {
  numbers.esPar(n)
    ? logger.info(`El número ${n} es par`)
    : logger.error(`El número ${n} no es par`);
});
