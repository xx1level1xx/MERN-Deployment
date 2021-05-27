const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[
            true,
            "Pet name is required"
        ],
        minlength:[
            3,
            "Pet name must be at least 3 characters long"
        ],
        unique:[
            true
        ]
    },
    petType:{
        type: String,
        required:[
            true,
            "Pet type is required"
        ],
        minlength:[
            3,
            "Pet type must be at least 3 characters long"
        ]
    },
    description:{
        type: String,
        required:[
            true,
            "Pet description is required"
        ],
        minlength:[
            3,
            "Pet description must be at least 3 characters long"
        ]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
}, {timestamps: true});
PetSchema.plugin(uniqueValidator)
module.exports.Pet = mongoose.model("Pet", PetSchema);