function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}

function startMove(obj,attr,iTarget,fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        if(attr == "opacity"){
            var cur = Math.round(parseFloat(getStyle(obj,attr))*100);
        }else{
            var cur = parseInt(getStyle(obj,attr));
        }
        var speed = (iTarget - cur)/6;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);

        if(cur == iTarget){ 
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }else{
            if(attr == "opacity"){
                obj.style[attr] = (cur + speed)/100;
            }else{
                obj.style[attr] = cur + speed + 'px';
            }
        }
    },30)
}