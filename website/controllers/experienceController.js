const experience = require('../models/experience')
const experienceController = {}

experienceController.getexperiences = async (req,res)=> {
    try {
        const docs = await experience.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
experienceController.getexperience = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await experience.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
experienceController.createexperience = async (req,res)=> {
    try {
        const experienceData = req.body
        const createdexperience = experience.create(experienceData)
        res.status(200).json(createdexperience)
    } catch (err) {
        console.log(err)
        throw err
    }
}

experienceController.updateexperience = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementexperience = req.body
        const modifiedexperience = await experience.replace(id, replacementexperience)
        res.status(200).json(modifiedexperience)
    } catch (err) {
        console.log(err)
        throw err
    }
}
experienceController.replaceexperience = async (req,res)=> {
    try {
        const replacementexperience = req.body
        const id = parseInt(req.params.id)
        const updatedexperience = await experience.edit(id, replacementexperience)
        res.status(200).json(updatedexperience)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
experienceController.removeexperience = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await experience.destroy(id)
        res.status(200).json(experience)
    } catch (err) {
        console.log(err)
        throw err
    } 
}



module.exports = experienceController
