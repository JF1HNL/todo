const list = document.querySelector('#list');

const field = document.querySelector('#field');
field.addEventListener('change', () =>{
    let item = document.createElement('div');
    item.setAttribute('class','item');
    item.innerText = field.value;
    list.appendChild(item);
    const button = document.createElement('input');
    let flag = true;
    button.addEventListener('click', () =>{
        // list.removeChild(item);
        if(flag == true){
            item.style.textDecoration = 'line-through';
            button.value = 'undone!';
            flag = false;
        }else{
            item.style.textDecoration = '';
            flag = true;
            button.value = 'done!'
        }
    })
    button.setAttribute('class','button');
    button.setAttribute('type','button');
    button.value = 'done!'
    item.appendChild(button);   
    field.value = '';

    let sw_flag = true;
    let memory = '';
    const switching = document.querySelector('#switching');
    switching.addEventListener('click', () =>{
        if(sw_flag == true){
            if(flag == false){
                memory = item.innerText;
                list.removeChild(item);
                sw_flag = false;
                switching.value="hyouji"
            }
        }else{
            
            item = document.createElement('div');
            item.setAttribute('class','item');
            item.innerText = memory;
            list.appendChild(item);
            const button = document.createElement('input');
            let flag = false;
            button.addEventListener('click', () =>{
                // list.removeChild(item);
                if(flag == true){
                    item.style.textDecoration = 'line-through';
                    button.value = 'undone!';
                    flag = false;
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

            switching.value="hihyouji"
            sw_flag = true;
        }
    })

})
