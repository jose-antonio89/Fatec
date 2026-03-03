const animal = require ('./animal')

class gato extends animal {
    falar(){
        console.log("o gato fez Miau!")
    }
}

module.exports = gato