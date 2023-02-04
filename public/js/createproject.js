//  Function to POST a new project to the database

const createProjectFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#pname').value.trim();
    const description = document.querySelector('#description').value.trim();
    const link = document.querySelector('#plink').value.trim();
    const project_technology = document.querySelector('#project_technology').value.trim();
    let user_id = document.event.target.hasAttribute('data-id');

    if (event.target.hasAttribute('data-id')) {
        let user_id = event.target.getAttribute('data-id');
        console.log("id: " + user_id)
    }
    if (name && description && link && project_technology) {
        const response = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify({ name, description, link, project_technology, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace(`/profile/:${user_id}`);
        } else {
            alert(response.statusText);
        }
    }


}

// Function to DELETE a project from the database

const deleteFormHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/projects/${user_id}`, {
        method: 'DELETE',    
    });
    if (response.ok) {
        document.location.replace(`/profile/:${user_id}`);
    } else {
        alert(response.statusText);
    }
}

// FUNCTION TO EDIT DATA/ PUT REQUEST TO PROJECT DATA
// 
// END

// Write function that checks if create-project-b is clicked run create project function
document.querySelector('#create-project-b').addEventListener('submit', createProjectFormHandler);
document.querySelector('#delete-project-b').addEventListener('submit', deleteFormHandler);