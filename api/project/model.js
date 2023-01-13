// build your `Project` model here
const db = require('../../data/dbConfig')

async function createNewProject (project) {
    await db('projects')
        .insert(project)
    const result = await findProjects()
    return result[result.length - 1]
}

async function findProjects () {
    const projectos = await db('projects')    
    const result = projectos.reduce((acc, curr) => {
        acc.push({ 
                project_id: curr.project_id,
                project_name: curr.project_name,
                project_description: curr.project_description,
                project_completed: curr.project_completed === 0 ? false : true 
            })
            return acc
    }, [])
        return result
}

module.exports = {
    createNewProject,
    findProjects
}