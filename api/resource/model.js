// build your `Resource` model here
const db = require('../../data/dbConfig')

async function createNewResource (resource) {
    await db('resources')
    .insert(resource)
const result = await findResources()
return result[result.length - 1]
}

const findResources = () => {
        return db('resources')
}

module.exports = {
    createNewResource,
    findResources
}