const list = document.querySelector('#list');
let sw_flag = true;
let i = 0;

class cl_item{
    constructor(ele,but_ele,content,i,rm_flag){
        this.ele = ele;
        this.but_ele = but_ele;
        this.content = content;
        this.rm_flag = rm_flag;
        this.num = i;
        this.ele.innerText = this.content;
        this.ele.class = 'item';
        this.but_ele.class = 'button';
        this.but_ele.type = 'button';
    }
    button(){
        this.but_ele.addEventListener('click', () =>{
            if(this.rm_flag === true){
                this.ele.style.textDecoration = 'line-through';
                this.but_ele.value = 'undone!';
                this.rm_flag = false;
                if(sw_flag === false){
                    list.removeChild(this.ele);
                }
            }else{
                this.ele.style.textDecoration = '';
                this.rm_flag = true;
                this.but_ele.value = 'done!'
            }
        })
    }
}


let item = [];
const field = document.querySelector('#field');
field.addEventListener('change', () => {
    i++;
    item[i] = new cl_item(document.createElement('div'),document.createElement('input'),field.value,i,true);
    list.appendChild(item[i].ele);
    item[i].but_ele.value = 'done!';
    item[i].ele.appendChild(item[i].but_ele);
    field.value = '';
    item[i].button();
})

const switching = document.querySelector('#switching')
switching.addEventListener('click', () =>{
    if(sw_flag === true){
        sw_flag = false;
        switching.value = 'show';
        if(i > 0){
            for(let j = 1; j <= i; j++){
                if(item[j].rm_flag === false){
                    list.removeChild(item[j].ele);
                }
            }
        }
    }else{
        sw_flag = true;
        switching.value = 'unshow';
        if(i > 0){
            for(let j = 1; j <= i; j++){
                if(item[j].rm_flag === true){
                    list.removeChild(item[j].ele);
                }
            }
            for(let j = 1; j <= i; j++){
                item[j] = new cl_item(document.createElement('div'),document.createElement('input'),item[j].content,j,item[j].rm_flag);
                list.appendChild(item[j].ele);
                if(item[j].rm_flag === true){
                    item[j].but_ele.value = 'done!';
                }else{
                    item[j].but_ele.value = 'undone!';
                    item[j].ele.style.textDecoration = 'line-through';
                }
                item[j].ele.appendChild(item[j].but_ele);
                item[j].button();
            }
        }
    }
})
