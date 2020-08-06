    //      ajax全局设置
    $.ajaxSetup({
        // data:{"token":sessionStorage.getItem("token")}
        headers:{
            "token":sessionStorage.getItem("token")
        },
        complete:function(request){
            console.log(request);
            if (request.responseJSON.status==false){
                if (request.responseJSON.message=="您尚未登陆"||request.responseJSON.message("登陆超时")){
                    location.href="login.html";
                }
            }
        }
    });