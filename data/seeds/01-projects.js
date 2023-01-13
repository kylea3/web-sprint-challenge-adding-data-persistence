const projects = [
    {project_name:"search the house", project_description:'find the missing wallet', project_completed: false},
    {project_name:"cover the pool", project_description:'cover up the pool', project_completed: false},
    {project_name:"build a shed", project_description:'build a brand new shed in the backyard', project_completed: false}
]

const resources = [
    {resource_name:"food", resource_description:null},
    {resource_name:"water", resource_description:null},
    {resource_name:"shelter", resource_description:null}
]

const tasks = [
    { task_description: 'look in bathroom', task_notes: 'especially in the drawers', task_completed: false, project_id: 1 },
    { task_description: 'look in bedroom', task_notes: 'especially under the bed', task_completed: false, project_id: 1 },
    { task_description: 'get out the cover', task_notes: 'check the garage', task_completed: false, project_id: 2 },
    { task_description: 'winterize the water', task_notes: 'get water out of pipes', task_completed: false, project_id: 2 },
    { task_description: 'put cover over pool', task_notes: null, task_completed: false, project_id: 2 },
    { task_description: 'buy the materials', task_notes: 'need wood, nails, and paint', task_completed: false, project_id: 3 },
    { task_description: 'pour concrete pad', task_notes: 'pay the contractor', task_completed: false, project_id: 3 },
    { task_description: 'construction', task_notes: null, task_completed: false, project_id: 3 },
    { task_description: 'paint it', task_notes: null, task_completed: false, project_id: 3 },
    { task_description: 'inspect', task_notes: 'check the studs', task_completed: false, project_id: 3 },
]

const project_resources = [
    { resource_id: 1, project_id: 1 },
    { resource_id: 2, project_id: 1 },
    { resource_id: 3, project_id: 1 },
    { resource_id: 1, project_id: 2 },
    { resource_id: 2, project_id: 2 },
    { resource_id: 2, project_id: 3 },
    { resource_id: 3, project_id: 3 },
    
]




exports.seed = async function(knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
  
};