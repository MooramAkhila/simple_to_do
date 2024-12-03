document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
      document.getElementById('task-list').appendChild(li);
      taskInput.value = ''; // Clear input
    }
  });
  