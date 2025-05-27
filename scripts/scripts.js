      var data = [];
      var counter = 0;
      updateStats();
      function addTask() {
        var a = document.getElementById("taskInput");
        var task = a.value;
        if (task.length !== 0) {
          data[counter] = {
            id: counter,
            name: task,
            done: false,
          };
          counter++;
          a.value = "";
          getTaskList();
        }
        else{
            console.log('task is empty ')
        }
      }

      function getTaskList() {
        var ul = document.getElementById("taskList");
        ul.innerHTML = "";
        data.forEach((task, i) => {
        if (task) {
            const li = document.createElement("li");
            const btnClass = task.done?   "btn-undo" : "btn-done"
            li.classList.add('todo-item')
         li.innerHTML = `
         <span class="task-text"> ${task.name} </span>
        <div class="btn-section">
        <button  class="todo-btn ${btnClass}" onclick='toggle(${i},this)'>
        ${task.done ? "Undo" : "Done"}
        <button class="todo-btn btn-delete" onclick='deleteTask(${i})'>Delete</button> <div>`
        ;
              ul.appendChild(li);

      if (task.done) {

        li.querySelector(".task-text").style.textDecoration = "line-through";
        li.style.borderLeft = "4px solid grey";
        li.querySelector(".task-text")
      }
      ul.appendChild(li);
    }
  });
      updateStats();

}
      
      function toggle(index,button) {
            // if (data[index].done === false) {
            // data[index].done = true;
            // } else {
            // data[index].done = false;
            // }
            //toggle using (!)
            data[index].done = !data[index].done;
        console.log(button)
      
            getTaskList();
      }
    

      function deleteTask(i) {
        // data[i] = undefined; // BAD PRACTICE: Leaves holes in array
        data.splice(i,1);
        getTaskList();
      }

      function updateStats(){
        const total = data.length;
        console.log(data.length)
        const completed = data.filter(task => task.done).length;
        const remaining = total - completed;
            document.getElementById("stats").innerHTML = 
                `📊 ${total} total • ✅ ${completed} completed • ⏳ ${remaining} remaining`;
        }

        // Allow Enter key to add task
        document.getElementById("taskInput").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                addTask();
            }
        });
        // Allow Enter key to add task

