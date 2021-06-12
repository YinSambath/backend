const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({ 
    user:{
        type: mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        type: String,
        //required: true,
    },
    genre: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        //require: true,
        default: 0
    },
}, {
    timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie