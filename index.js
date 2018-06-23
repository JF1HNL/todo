const list = document.querySelector('#list');

let sw_flag = true;
const field = document.querySelector('#field');
field.addEventListener('change', () =>{
    let item = document.createElement('div');
    item.setAttribute('class','item');
    item.innerText = field.value;
    list.appendChild(item);
    const button = document.createElement('input');
    let flag = true;
    button.setAttribute('class','button');
    button.setAttribute('type','button');
    item.appendChild(button);   
    button.addEventListener('click', () =>{
        // list.removeChild(item);
        if(flag == true){
            item.style.textDecoration = 'line-through';
            button.value = 'undone!';
            flag = false;
            if(sw_flag == false){
                memory = item.innerText;
                list.removeChild(item);
            }
        }else{
            item.style.textDecoration = '';
            flag = true;
            button.value = 'done!'
        }
    })
    button.value = 'done!'
    field.value = '';

    let memory = '';
    const switching = document.querySelector('#switching');
    switching.addEventListener('click', () =>{
        if(sw_flag == true){
            if(flag == false){
                memory = item.innerText;
                list.removeChild(item);
            }
            switching.value="show"
            setTimeout(() => {
                sw_flag = false;
            },0);
        }else{
            
            item = document.createElement('div');
            item.setAttribute('class','item');
            item.innerText = memory;
            list.appendChild(item);
            const button = document.createElement('input');
            flag = false;
            button.addEventListener('click', () =>{
                // list.removeChild(item);
                if(flag == true){
                    item.style.textDecoration = 'line-through';
                    button.value = 'undone!';
                    flag = false;
                    if(sw_flag == false){
                        memory = item.innerText;
                        list.removeChild(item);
                    }
                }else{
                    item.style.textDecoration = '';
                    flag = true;
                    button.value = 'done!'
                }
            })
            button.setAttribute('class','button');
            button.setAttribute('type','button');
            item.style.textDecoration = 'line-through';
            button.value = 'undone!'
            item.appendChild(button);

            switching.value="un-show"
            setTimeout(() => {
                sw_flag = true;
            },0);
        }
    })

})

/*function done_undone(){   
    if(flag == true){
        item.style.textDecoration = 'line-through';
        button.value = 'undone!';
        flag = false;
        if(sw_flag == false){
            memory = item.innerText;
            list.removeChild(item);
        }
    }else{
        item.style.textDecoration = '';
        flag = true;
        button.value = 'done!'
    } 
}

function item_remove(){
    memory = item.innerText;
    list.removeChild(item);
}*/