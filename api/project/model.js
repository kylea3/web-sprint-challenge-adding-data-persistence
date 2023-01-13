// build your `Project` model here
const db = require('../../data/dbConfig')

const createNewProject = () => {

}

async function findProjects () {
    const projectos = await db('projects')
    console.log(projectos.project_completed)
    
    const result = projectos.reduce((acc, curr) => {
        acc.push({ 
                project_id: curr.project_id,
                project_name: curr.project_name,
                project_description: curr.project_description,
                project_completed: curr.project_completed === 0 ? false : true 
            })
            return acc
    }, [])
    // const result = {
    //     project_id: projectos.project_id,
    //     project_name: projectos.project_name,
    //     project_description: projectos.project_description,
    //     project_completed: projectos.project_completed === 0 ? false : true
    //     }
        return result
}

module.exports = {
    createNewProject,
    findProjects
}