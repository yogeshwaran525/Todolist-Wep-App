window.addEventListener('load', () => {
    const form = document.querySelector("#form-container")
    const input = document.querySelector("#task-input")
    const list_El = document.querySelector("#task-container")
    // let remove ='';
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
    // If empty task shows add an Task after click 
        if (task == 0) {
            alert('This is an empty task')
        } else {

            const task_El = document.createElement('div')
            task_El.classList.add('task-list')

            const task_content_El = document.createElement('div')
            task_content_El.classList.add('Innercontent')

            task_El.appendChild(task_content_El);

            const task_input_El = document.createElement('input')
            task_input_El.classList.add('text')
            task_input_El.type = ' text';
            task_input_El.value = task;
            task_input_El.setAttribute('readonly', 'readonly')

            task_content_El.appendChild(task_input_El);

            const task_action_El = document.createElement('div')
            task_action_El.classList.add('actionbutton')          

            const task_edit_El = document.createElement('button')
            task_edit_El.classList.add('edit')
            task_edit_El.innerText = 'Edit'

            const task_delete_El = document.createElement('button')
            task_delete_El.classList.add('delete')
            task_delete_El.innerText = 'Delete'

            task_action_El.appendChild(task_edit_El)
            task_action_El.appendChild(task_delete_El)

            task_El.appendChild(task_action_El)

            list_El.appendChild(task_El)

            input.value = '';

            task_edit_El.addEventListener('click', (e) => {

                if (task_edit_El.innerText.toLowerCase() == "edit") {
                    task_edit_El.innerText = "save"
                    task_input_El.removeAttribute("readonly")
                    task_input_El.focus();
                } else {
                    task_edit_El.innerText = 'Edit'
                    task_input_El.setAttribute("readonly", "readonly")
                }
            })

            task_delete_El.addEventListener('click', deletefunction) 
          
                    function deletefunction(){
                    
                    // Before Deleting the task Confirmation

                        var del = confirm('Confirm to delete the task');
                        if(del){
                            list_El.removeChild(task_El); 
                        }else(del == false)
                        {
                           e.preventDefault();
                        }    
                        return del;
                    }   
        }

    })  
    

})