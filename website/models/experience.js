const connection = require('../database')
const experience = {}

experience.list = async function () {
    return await connection.db.collection('Experiences').find({}).toArray()
}
experience.getOne = async function (id) {
    return await connection.db.collection('Experiences').find({id}).toArray()
}
experience.create = async function (data) {
    return await connection.db.collection('Experiences').insertOne(data)
}
experience.edit = async function (id, data) {
    return await connection.db.collection('Experiences').replaceOne({id}, data)
}
experience.replace = async function (id, data) {
    return await connection.db.collection('Experiences').updateOne({id}, {$set: data})
}
experience.destroy = async function (id) {
    return await connection.db.collection('Experiences').deleteOne({id})
}
module.exports = experience