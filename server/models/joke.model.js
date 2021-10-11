const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
        type: String,
        required: [true,"es requerido"],
        minlength: [10,"largo minimo de 10 letras"]
    },
	punchline: {
        type: String,
        required: [true,"es requerido"],
        minlength: [10, " largo minimo de 10 "]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;