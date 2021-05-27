const {Pet} = require('../models/pet.model');

module.exports.createPet = (req,res) => {
    const {name, petType, description, skill1, skill2, skill3} = req.body;
    Pet.create({
        name,
        petType,
        description,
        skill1,
        skill2,
        skill3,
    })
    .then(belt => res.json(belt))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllPets = (req,res) => {
    Pet.find({})
    .then(belt => res.json(belt))
    .catch(err => res.status(400).json(err));
}

module.exports.getOnePet = (req,res) => {
    Pet.findOne({_id: req.params.id}) 
    .then(detail => res.json(detail))
    .catch(err => res.json(err));
}

module.exports.updatePet = (req,res) => {
    Pet.updateOne({_id: req.params.id}, req.body, {new: true, runValidators:true, context:'query',})
    .then(edit => res.json(edit))
    .catch(err => res.status(400).json(err));
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.status(400).json(err))
}