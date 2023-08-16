document.addEventListener('DOMContentLoaded', () => {
    getTodos = async () => {
        const response = await fetch('https://sea-lion-app-77lg6.ondigitalocean.app/api/todo/find/all')
        const result = await response.json()
        console.log(result)
        if (response.ok) {
            result.forEach(item => {
                const todoTableBody = document.getElementById("table_content")
                const row = document.createElement('tr');
                const titleColumn = document.createElement('td');
                const descriptionColumn = document.createElement('td');
                const actionColumn = document.createElement('td')

                titleColumn.textContent = item.todo_title;
                descriptionColumn.textContent = item.todo_description;

                // Delete Button 
                const todo_id = item.id
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete me";
                deleteButton.onclick = function () {
                    deleteTodo(todo_id); // Pass the ID 100 to the function
                };
                actionColumn.appendChild(deleteButton)

                row.appendChild(titleColumn);
                row.appendChild(descriptionColumn);
                row.appendChild(actionColumn)
                todoTableBody.append(row)
                console.log(row)
            })
        }
        else {
            console.error('Error submitting todo');
        }

    }
    getTodos()
    const deleteTodo = async (id) => {

        console.log(id)
        await fetch('https://sea-lion-app-77lg6.ondigitalocean.app/api/todo/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo_id: id
            })
        })
            .then(res => {
                console.log(res)
                if (res.ok) {
                    window.location.reload()
                }
            })
    }

})