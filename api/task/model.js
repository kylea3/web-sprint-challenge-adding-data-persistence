// build your `Task` model here
const db = require('../../data/dbConfig')

async function createNewTask (task) {
    await db('tasks')
        .insert(task)
    const rows = await db('tasks as t')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description', 'p.project_id')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    const result = {
        task_id: rows[rows.length - 1].task_id,
        task_description: rows[rows.length - 1].task_description,
        task_notes: rows[rows.length - 1].task_notes,
        task_completed: rows[rows.length - 1].task_completed === 0 ? false : true,
        project_id: rows[rows.length - 1].project_id
    }
    return result
}
/*
select task_id, task_description, task_notes, task_completed, project_name, project_description from tasks as t
left join projects as p on t.project_id=p.project_id
*/



async function findTasks () {
    const rows = await db('tasks as t')
            .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description', 'p.project_id')
            .leftJoin('projects as p', 't.project_id', 'p.project_id')
    const result = rows.reduce((acc, curr) => {
        acc.push({ 
                task_id: curr.task_id,
                task_notes: curr.task_notes,
                task_description: curr.task_description,
                task_completed: curr.task_completed === 0 ? false : true,
                project_name: curr.project_name,
                project_description: curr.project_description 
            })
            return acc
    }, [])
        return result
}

module.exports = {
    createNewTask,
    findTasks
}