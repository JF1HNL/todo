const list = document.querySelector('#list');
let sw_flag = true;
let i = 0;

class cl_item{
    constructor(content,rm_flag){
        this.ele = document.createElement('div');
        this.but_ele = document.createElement('input');
        this.content = content;
        this.rm_flag = rm_flag;
        this.ele.innerText = this.content;
        this.ele.class = 'item';
        this.create_button();
    }
    create_button(){
        this.but_ele.class = 'button';
        this.but_ele.type = 'button';
        if(this.rm_flag){
            this.but_ele.value = 'done!';
        }else{
            this.but_ele.value = 'undone!';
        }
        this.but_ele.addEventListener('click',this.press_button());
        this.ele.appendChild(this.but_ele);
    }
    press_button(){
        return () => {
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
        }
    }
}


let item = [];
const field = document.querySelector('#field');
field.addEventListener('change', () => {
    i++;
    item[i] = new cl_item(field.value,true);
    list.appendChild(item[i].ele);
    field.value = '';
})

const switching = document.querySelector('#switching')
switching.addEventListener('click', () =>{
    if(sw_flag){
        sw_flag = false;
        switching.value = 'show';
        if(i > 0){
            for(let j = 1; j <= i; j++){
                if(!item[j].rm_flag){
                    list.removeChild(item[j].ele);
                }
            }
        }
    }else{
        sw_flag = true;
        switching.value = 'unshow';
        if(i > 0){
            for(let j = 1; j <= i; j++){
                if(item[j].rm_flag){
                    list.removeChild(item[j].ele);
                }
            }
            for(let j = 1; j <= i; j++){
                list.appendChild(item[j].ele);
            }
        }
    }
})
