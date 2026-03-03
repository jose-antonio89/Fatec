const animal = require ('./animal')

class cachorro extends animal {
    falar(){
        console.log("o cachorro falou Au Au!")
    }

}

module.exports = cachorro