function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}

function startMove(obj,json,fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        
        var bStop = true;
        for(var attr in json){
            if(attr == "opacity"){
                var cur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                var cur = parseInt(getStyle(obj,attr));
            } 
            var speed = (json[attr] - cur)/6;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur != json[attr]){
                bStop = false;
            }

            if(attr == "opacity"){
                obj.style[attr] = (cur + speed)/100;
            }else{
                obj.style[attr] = cur + speed + 'px';
            }
        }
         if(bStop){
             clearInterval(obj.timer);
             if(fnEnd)fnEnd();
         }
    },30)
}