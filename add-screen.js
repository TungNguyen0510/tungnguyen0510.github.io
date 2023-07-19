const addBtn = document.getElementById("add-btn");

// Khi nhấn vào nút thêm thì thêm thông tin task vừa tạo vào LocalStorage
addBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var titleInput = document.getElementById("input-title");
    var prioritySelect = document.getElementById("input-priority");
    var endDateSelect = document.getElementById("input-end-date");
  
    var title = titleInput.value.trim();
    var priority = prioritySelect.value;
    var endDate = endDateSelect.value;
  
    if (title === "" || priority === "" || endDate === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    var task = {
      title: title,
      priority: priority,
      endDate: endDate
    };
  
    
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
    titleInput.value = "";
    prioritySelect.value = "";
    endDateSelect.value = "";
    alert("Đã thêm thành công 1 task!");
    location.href = "./home-screen.html";
  });