window.addEventListener('load', () => {
    const form = document.querySelector("#taskfrom");
    const input = document.querySelector("#newtaskinput");
    const list = document.querySelector("#containertasks");
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newtask = input.value;

        if(input.value ==''){
            alert("input do");
        }
        else{

        const task = document.createElement("div");
        task.classList.add("task");

        const taskcontent = document.createElement("div");
        taskcontent.classList.add("content");

        task.appendChild(taskcontent);

        const taskinput = document.createElement("input");
        taskinput.classList.add("text");
        taskinput.type = 'text';
        taskinput.value = newtask;
        taskinput.setAttribute('readonly', 'readonly');

        taskcontent.appendChild(taskinput);

        taskactions = document.createElement("div");
        taskactions.classList.add("actions");

        const taskedit = document.createElement("button");
        taskedit.classList.add("edit");
        taskedit.innerText = 'Edit';

        const taskdelete = document.createElement("button");
        taskdelete.classList.add("delete");
        taskdelete.innerText = 'Delete';

        taskactions.appendChild(taskedit);
        taskactions.appendChild(taskdelete);

        task.appendChild(taskactions);

        list.appendChild(task);

        input.value = '';

          
        taskedit.addEventListener('click', (e) => {
            if(taskedit.innerText.toLocaleLowerCase() =="edit")
            {
                taskedit.innerText = "Save";
                taskinput.removeAttribute("readonly");
            }
            else{
                taskedit.innerText = "Edit";
                taskinput.setAttribute("readonly", "readonly");
            }
        });
    }

        taskdelete.addEventListener('click', (e) => {
            list.removeChild(task);
        });
        
    
    });
});
