$.widget('custom.nav',{
    init:function(url){
        var oThat = this; 
        $.ajax({
            type: "get",
            url: 'http://g.cn',
            dataType: "json",
            success: function (response) {
                console.log(response.array);
                var oUl = $('<ul></ul>');
                for(var i = 0; i < response.array.length; i++){
                    var oLi = $('<li><a href="'+response.array[i].href+'">'+response.array[i].name+'</a></li>');
                    oUl.append(oLi);
                };
                oUl.addClass('nio_nav');
                oThat.element.append(oUl);
                oThat.active();
                oThat.showOrHide();
            }
        }); 
    },
    /**
     * 判断当前是哪一页，当前页高亮
     */
    active:function(){
        var oNowHref = window.location.href;
        var oAlla    = this.element.find('li a');
        oAlla.each(function(k,v){
            if(oNowHref.indexOf($(v).attr('href')) != -1){
                $(v).addClass('active');
            }
        });
    },
    /**
     * 导航栏的显示与隐藏
     */
    showOrHide:function(){
        var oNav = $('.nio_nav');
        $(document).on('scroll',function(){
            var sT = $(document).scrollTop();
            if(sT >=200){
                oNav.addClass('nav_hidden');
            }
            if(sT >= 800){
                oNav.addClass('nav_away nav_animate');  
            }
            if(sT < 800){
                oNav.removeClass('nav_away');
            }
            if(sT < 200){
                oNav.removeClass('nav_hidden nav_animate');
            }
        });
    }
});
