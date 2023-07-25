  document.querySelector('#push').onclick = function() {
    var taskInput = document.querySelector('#taskInput');
    var taskValue = taskInput.value.trim(); 

    if (taskValue.length === 0) {
      alert("Please Enter a Task");
    } else {
      document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span id="taskname">
            ${taskValue}
          </span>
          <button class="delete">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      `;

      taskInput.value = "";

      var current_tasks = document.querySelectorAll(".delete");
      for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
          this.parentNode.remove();
        };
      }
    }
  };
document.querySelector('#push').onclick = function() {
  var taskInput = document.querySelector('#taskInput');
  var taskValue = taskInput.value.trim(); 

  if (taskValue.length === 0) {
    alert("Please Enter a Task");
  } else {
    var currentDate = new Date().toLocaleString(); // Get the current date and time in a readable format
    document.querySelector('#tasks').innerHTML += `
      <div class="task">
        <span id="taskname">
          ${taskValue}
        </span>
        <span class="task-time">
          ${currentDate}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;

    taskInput.value = "";

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function() {
        this.parentNode.remove();
      };
    }
  }
};
  function displaySuggestions() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        var title_array = data.map(item => item.title);
  
        var task1Div = document.querySelector('#task1');
        task1Div.innerHTML = '<ul>';
  
        title_array.forEach(title => {
          task1Div.innerHTML += `<li>${title}</li>`;
        });
  
        task1Div.innerHTML += '</ul>';
      });
  }
  
  // Call the function to display suggestions when the page loads
  window.onload = function() {
    displaySuggestions();
  };
  
 
  

