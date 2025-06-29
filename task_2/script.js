// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("formError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    errorMsg.textContent = "All fields are required.";
    return;
  }

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  errorMsg.textContent = "";
  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
});

// To-Do List
function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  if (input.value.trim()) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${input.value}</span>
      <div class="task-actions">
        <button class="complete-btn" onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
    input.value = '';
  }
}

function completeTask(button) {
  const li = button.closest('li');
  li.classList.toggle('completed');
  button.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
}

function deleteTask(button) {
  button.closest('li').remove();
}


