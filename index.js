let Field = new Vue({
    el: '#list',
    data: {
        title : 'udon!',
        list : [
        ],
        show : true
    },
    computed: {
        unshow_list: function(){
            return this.list.filter(item => item.f_done === false)
        }
    },
    methods : {
        add : function(){
            this.list.push({text:this.title,f_done:false});
            this.title = '';
        },
        done : function(item){
            if(item.f_done){
                item.f_done = false
            }else{
                item.f_done = true
            }
        }
    }
})