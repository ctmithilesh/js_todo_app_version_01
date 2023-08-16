document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todoForm');

  todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const todoTitle = document.getElementById('title').value;
    const todoDescription = document.getElementById('description').value;

    const formData = {
      todo_title: todoTitle,
      todo_description: todoDescription
    };

    try {
      const response = await fetch('https://sea-lion-app-77lg6.ondigitalocean.app/api/todo/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 200) {
        console.log(response)
        console.log('Todo submitted successfully');
        window.location.href = "todo_dashboard.html"
      } else {
        console.error('Error submitting todo');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
});