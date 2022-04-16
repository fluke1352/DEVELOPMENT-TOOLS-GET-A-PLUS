import mongoose from 'mongoose';

const GameSchema = mongoose.Schema({
    name : {
        type : String,
        trim : true,
        unique: true,
        index : true
    },
    img : {
        type : String,
    },
    description : {
        type : String
    } 
})

const GameModel = mongoose.model('games', GameSchema)

export default GameModel