function renderEditTask(){
    var editTask = JSON.parse(localStorage.getItem('editTask')) || [];

    var priorityText = "";
    var priorityStyle = "";
    if(editTask.priority === "low"){
        priorityText = "Thấp";
        priorityStyle = "low";
    }
    if(editTask.priority === "middle"){
        priorityText = "Trung Bình";
        priorityStyle = "middle";
    }
    if(editTask.priority === "high"){
        priorityText = "Cao";
        priorityStyle = "high";
    }
    
    var editTaskDiv = document.createElement("div");
    editTaskDiv.classList.add("edit-task");
        
    editTaskDiv.innerHTML = `
            <div class="title">${editTask.title}</div>
            <div class="priority">
            <h1 class="${priorityStyle}">${priorityText}</h1>
            </div>
        
            <a class="edit">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="edit-btn">
                    <path d="M13.3833 7.08958L11.9104 5.61666L2.20833 15.3187V16.7917H3.68125L13.3833 7.08958ZM14.8562 5.61666L16.3292 4.14374L14.8562 2.67083L13.3833 4.14374L14.8562 5.61666ZM4.54375 18.875H0.125V14.4552L14.1198 0.460412C14.3151 0.26513 14.58 0.155426 14.8562 0.155426C15.1325 0.155426 15.3974 0.26513 15.5927 0.460412L18.5396 3.40729C18.7349 3.60263 18.8446 3.86753 18.8446 4.14374C18.8446 4.41996 18.7349 4.68486 18.5396 4.8802L4.54479 18.875H4.54375Z" fill="#FF4646" fill-opacity="0.53"/>
                </svg>
            </a>
            <div class="delete">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="delete-btn">
                    <path d="M5.29171 2.16668V0.0833435H15.7084V2.16668H20.9167V4.25001H18.8334V19.875C18.8334 20.1513 18.7236 20.4162 18.5283 20.6116C18.3329 20.8069 18.068 20.9167 17.7917 20.9167H3.20837C2.93211 20.9167 2.66716 20.8069 2.4718 20.6116C2.27645 20.4162 2.16671 20.1513 2.16671 19.875V4.25001H0.083374V2.16668H5.29171ZM4.25004 4.25001V18.8333H16.75V4.25001H4.25004ZM7.37504 7.37501H9.45837V15.7083H7.37504V7.37501ZM11.5417 7.37501H13.625V15.7083H11.5417V7.37501Z" fill="#FF4646" fill-opacity="0.53"/>
                </svg>
            </div>`;

    var editTaskCard = document.querySelector(".edit-screen .task-card");
    editTaskCard.appendChild(editTaskDiv);
    

}


function editTaskCard(){

    var inputTitle = document.querySelector(".edit-title");
    var newTitleValue = inputTitle.value.trim();
    
    var titleNeedEdit = document.querySelector(".edit-task .title");
    var titleEditValue = titleNeedEdit.innerHTML.trim();

    if (newTitleValue === "") {
        alert("Vui lòng điền thông tin muốn sửa!");
        return;
    }
        
    else if(newTitleValue === titleEditValue) {
            alert("Cần nhập thông tin sửa khác với thông tin ban đầu!");
            return;
        }
        else {
            location.href = "./home-screen.html";
        }
    

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach(function(task,index) {
        if(titleEditValue === task.title) {
            tasks[index].title = newTitleValue;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
      
}


  
  
 
  
  
  
  
      
      
      

    
