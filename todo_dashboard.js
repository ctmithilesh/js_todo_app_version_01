document.addEventListener('DOMContentLoaded', () => {


    getTodos = async()=>{
            const response = await fetch('http://localhost:8080/api/todo/find/all')
            const result = await response.json()
            console.log(result)
            if(response.ok){
                result.forEach(item=>{
                    const todoTableBody = document.getElementById("table_content")
                    const row = document.createElement('tr');
                    const titleColumn = document.createElement('td');
                    const descriptionColumn = document.createElement('td');
                    const actionColumn = document.createElement('td')
    
                    titleColumn.textContent = item.todo_title;
                    descriptionColumn.textContent = item.todo_description;
                    actionColumn.innerHTML = `<button id=${item.id}> Delete </button>`
    
                    row.appendChild(titleColumn);
                    row.appendChild(descriptionColumn);
                    row.appendChild(actionColumn)
                    todoTableBody.append(row)
                    console.log(row)
                })
            }
            else{
                console.error('Error submitting todo');
            }

    }
    getTodos()

})

