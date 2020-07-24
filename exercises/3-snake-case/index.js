/**
 *
 */
const snakeCase = function (word) {
    return word.replace(/\W/g, '_');
}

module.exports = snakeCase
