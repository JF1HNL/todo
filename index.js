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