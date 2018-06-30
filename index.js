const list = document.querySelector('#list');
let sw_flag = true;
let i = 0;
let memory = [];
let rm_flag = [];
let button = [];
let item = [];
const field = document.querySelector('#field');
field.addEventListener('change', () => {
    i++;
    item[i] = document.createElement('div');
    item[i].setAttribute('class','item');
    item[i].innerText = field.value;
    memory[i] = field.value;
    rm_flag[i] = true;
    list.appendChild(item[i]);
    button[i] = document.createElement('input');
    button[i].setAttribute('class','button');
    button[i].setAttribute('type','button');
    button[i].setAttribute('value','done!');
    item[i].appendChild(button[i]);
    field.value = '';
    let k = i;
    button[k].addEventListener('click', () =>{
        if(rm_flag[k] == true){
            item[k].style.textDecoration = 'line-through';
            button[k].value = 'undone!';
            rm_flag[k] = false;
            if(sw_flag == false){
                list.removeChild(item[k]);
            }
        }else{
            item[k].style.textDecoration = '';
            rm_flag[k] = true;
            button[k].value = 'done!'
        }
    })
})

const switching = document.querySelector('#switching')
switching.addEventListener('click', () =>{
    if(sw_flag == true){
        sw_flag = false;
        switching.value = 'show';
        if(i > 0){
            for(let j = 1; j <= i; j++){
                if(rm_flag[j] == false){
                    list.removeChild(item[j]);
                }
            }
        }
    }else{
        sw_flag = true;
        switching.value = 'unshow';
        if(i > 0){
            for(let j = 1; j <= i; j++){
                if(rm_flag[j] == true){
                    list.removeChild(item[j]);
                }
            }
            for(let j = 1; j <= i; j++){
                item[j] = document.createElement('div');
                item[j].setAttribute('class','item');
                item[j].innerText = memory[j];
                list.appendChild(item[j]);
                button[j] = document.createElement('input');
                button[j].setAttribute('class','button');
                button[j].setAttribute('type','button');
                item[j].appendChild(button[j]);
                if(rm_flag[j] == true){
                    button[j].setAttribute('value','done!');
                }else{
                    button[j].setAttribute('value','undone!');
                    item[j].style.textDecoration = 'line-through';
                }
                let k = j;
                button[k].addEventListener('click', () =>{
                    if(rm_flag[k] == true){
                        item[k].style.textDecoration = 'line-through';
                        button[k].value = 'undone!';
                        rm_flag[k] = false;
                        if(sw_flag == false){
                            list.removeChild(item[k]);
                        }
                    }else{
                        item[k].style.textDecoration = '';
                        rm_flag[k] = true;
                        button[k].value = 'done!'
                    }
                })
            }
        }
    }
})

/*const field = document.querySelector('#field');
field.addEventListener('change', () =>{
    let item[i] = document.createElement('div');
    item[i].setAttribute('class','item[i]');
    item[i].innerText = field.value;
    list.appendChild(item[i]);
    const button[i] = document.createElement('input');
    let flag = true;
    button[i].setAttribute('class','button[i]');
    button[i].setAttribute('type','button[i]');
    item[i].appendChild(button[i]);   
    button[i].addEventListener('click', () =>{
        // list.removeChild(item[i]);
        if(flag == true){
            item[i].style.textDecoration = 'line-through';
            button[i].value = 'undone!';
            flag = false;
            if(sw_flag == false){
                memory = item[i].innerText;
                list.removeChild(item[i]);
            }
        }else{
            item[i].style.textDecoration = '';
            flag = true;
            button[i].value = 'done!'
        }
    })
    button[i].value = 'done!'
    field.value = '';

    let memory = '';
    const switching = document.querySelector('#switching');
    switching.addEventListener('click', () =>{
        if(sw_flag == true){
            if(flag == false){
                memory = item[i].innerText;
                list.removeChild(item[i]);
            }
            switching.value="show"
            setTimeout(() => {
                sw_flag = false;
            },0);
        }else{
            
            item[i] = document.createElement('div');
            item[i].setAttribute('class','item[i]');
            item[i].innerText = memory;
            list.appendChild(item[i]);
            const button[i] = document.createElement('input');
            flag = false;
            button[i].addEventListener('click', () =>{
                // list.removeChild(item[i]);
                if(flag == true){
                    item[i].style.textDecoration = 'line-through';
                    button[i].value = 'undone!';
                    flag = false;
                    if(sw_flag == false){
                        memory = item[i].innerText;
                        list.removeChild(item[i]);
                    }
                }else{
                    item[i].style.textDecoration = '';
                    flag = true;
                    button[i].value = 'done!'
                }
            })
            button[i].setAttribute('class','button[i]');
            button[i].setAttribute('type','button[i]');
            item[i].style.textDecoration = 'line-through';
            button[i].value = 'undone!'
            item[i].appendChild(button[i]);

            switching.value="un-show"
            setTimeout(() => {
                sw_flag = true;
            },0);
        }
    })

})

/*function done_undone(){   
    if(flag == true){
        item[i].style.textDecoration = 'line-through';
        button[i].value = 'undone!';
        flag = false;
        if(sw_flag == false){
            memory = item[i].innerText;
            list.removeChild(item[i]);
        }
    }else{
        item[i].style.textDecoration = '';
        flag = true;
        button[i].value = 'done!'
    } 
}

function item[i]_remove(){
    memory = item[i].innerText;
    list.removeChild(item[i]);
}*/