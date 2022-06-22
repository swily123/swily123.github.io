let button = document.getElementById("button")
let counter = document.getElementById("counter")
let pos1 = document.getElementById("pos1")
let pos2 = document.getElementById("pos2")
let body = document.getElementsByTagName('body')
let x = 0
button.onclick = function(){
    x++
    counter.innerHTML = x
    if(x <= "149"){

        setTimeout(function(){
            pos1.style.display = "none"
            pos2.style.display = "block"
            button.style.marginTop = "-1%"},100)
        setTimeout(function(){
            pos1.style.display = "block"
            pos2.style.display = "none"
            button.style.marginTop = "0%"},200)
    }
        if(x == "150"){
            document.body.style.background = "rgb(255, 189, 189)"
            setTimeout(function(){
                pos1.style.display = "none"
                pos2.style.display = "block"
                button.style.marginTop = "-1%" },200)
            setTimeout(function(){
                pos1.style.display = "block"
                pos2.style.display = "none"
                button.style.marginTop = "0%"
            },800)
        }
        if(x == "151"){
            document.body.style.background = "rgb(255, 159, 159)"            
            setTimeout(function(){
                pos1.style.display = "none"
                pos2.style.display = "block"
                button.style.marginTop = "-1%" },400)
            setTimeout(function(){
                pos1.style.display = "block"
                pos2.style.display = "none"
                button.style.marginTop = "0%"
            },1400)
        }
        if(x == "152"){
            document.body.style.background = "rgb(255, 113, 113)"            
            setTimeout(function(){
                pos1.style.display = "none"
                pos2.style.display = "block"
                button.style.marginTop = "-1%" },800)
            setTimeout(function(){
                pos1.style.display = "block"
                pos2.style.display = "none"
                button.style.marginTop = "0%"
            },2000)
        }
        if(x == "153"){
            document.body.style.background = "rgb(255, 60, 60)"            
            setTimeout(function(){
                pos1.style.display = "none"
                pos2.style.display = "block"
                button.style.marginTop = "-1%" },1400)
            setTimeout(function(){
                pos1.style.display = "block"
                pos2.style.display = "none"
                button.style.marginTop = "0%"
            },3000)
        }
        if(x == "154"){
            document.body.style.background = "red"            
            setTimeout(function(){
                pos1.style.display = "none"
                pos2.style.display = "block"
                button.style.marginTop = "-1%" },2000)
            setTimeout(function(){
                pos1.style.display = "block"
                pos2.style.display = "none"
                button.style.marginTop = "0%"
            },4000)
        }
        if(x == "155"){
            document.body.style.background = "rgb(104, 0, 0)"            
            setTimeout(function(){
                pos1.style.display = "none"
                pos2.style.display = "block"
                button.style.marginTop = "-1%"},3000)
            setTimeout(function(){
                pos1.style.display = "block"
                pos2.style.display = "none"
                button.style.marginTop = "0%"
            },5000)
        }
        if(x == "156"){
            window.location.href = 'index2.html';
        }
}