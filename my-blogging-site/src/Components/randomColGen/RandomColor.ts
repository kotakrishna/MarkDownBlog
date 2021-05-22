export const random=()=>{
    let value=Math.floor(Math.random()*100)

    if(value<=20){
        return ColorList[0]
    }else if(value<=40){
        
        return ColorList[1]
    }else if(value<=60){
        
        return ColorList[2]
    }else if(value<= 80){
        
        return ColorList[3]
    }else{
        
        return ColorList[4]
    }
}

const ColorList=["#287271","#EFB366","#F2AB64","#EE8959","#FFDAB9"]