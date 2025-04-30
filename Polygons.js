let x = document.getElementById("po2");
let y1 = document.createElement("div");
let y2 = document.createElement("div");
let y3 = document.createElement("div");
let y4 = document.createElement("div");
let y5 = document.createElement("div");
let y6 = document.createElement("div");

let st = document.createElement("style");
st.textContent = `
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(720deg);
  }
}
`;

document.head.appendChild(st); // مهم جداً جداً

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let po2 = document.getElementById("po2");

let c1 = ["#4B0000", "#00008B", "#004d00", "#663300", "#2E0854", "#1C1C1C"];
let c2 = ["#800000", "#0000CD", "#006400", "#CC5500", "#4B0082", "#2F4F4F"];
let c3 = ["#B22222", "#1E90FF", "#228B22", "#FF8C00", "#800080", "#696969"];
let c4 = ["#DC143C", "#4682B4", "#32CD32", "#FFA500", "#9370DB", "#A9A9A9"];
let c5 = ["#F08080", "#87CEFA", "#90EE90", "#FFB347", "#D8BFD8", "#D3D3D3"];
let c6 = ["#FFC0CB", "#E0FFFF", "#E0FFE0", "#FFE5B4", "#F3E5F5", "#F5F5F5"];


let colors=["red","blue","green","orange","purple","ashen"];
let c = 0;

btn6.onclick = function(){
    this.innerHTML=colors[c];
    c++;
    if(c>=colors.length){
        c=0;
    }
    switch(this.innerHTML){
  case "blue":
        y1.style.transition="2s";
        y2.style.transition="2s";
        y3.style.transition="2s";
        y4.style.transition="2s";
        y5.style.transition="2s";
        y6.style.transition="2s";
        po2.style.transition="2s";
        y1.style.backgroundColor = c6[1];
        y2.style.backgroundColor = c5[1];
        y3.style.backgroundColor = c4[1];
        y4.style.backgroundColor = c3[1];
        y5.style.backgroundColor = c2[1];
        y6.style.backgroundColor = c1[1];
        po2.style.boxShadow="10px 10px 35px"+c3[1]+",-10px -10px 35px"+c3[1]+",10px 10px 50px #ffffff5b inset,-10px -10px 50px #ffffff5b inset";            
        this.style.textShadow="0 0 30px "+c3[1];
        this.style.color=c3[1];
        break;
        case "green":
        y1.style.backgroundColor = c6[2];
        y2.style.backgroundColor = c5[2];
        y3.style.backgroundColor = c4[2];
        y4.style.backgroundColor = c3[2];
        y5.style.backgroundColor = c2[2];
        y6.style.backgroundColor = c1[2];
        po2.style.boxShadow="10px 10px 35px"+c3[2]+",-10px -10px 35px"+c3[2]+",10px 10px 50px #ffffff5b inset,-10px -10px 50px #ffffff5b inset";
        this.style.textShadow="0 0 30px "+c3[2];
        this.style.color=c3[2];
        break;
        case "orange":
        y1.style.backgroundColor = c6[3];
        y2.style.backgroundColor = c5[3];
        y3.style.backgroundColor = c4[3];
        y4.style.backgroundColor = c3[3];
        y5.style.backgroundColor = c2[3];
        y6.style.backgroundColor = c1[3];
        po2.style.boxShadow="10px 10px 35px"+c3[3]+",-10px -10px 35px"+c3[3]+",10px 10px 50px #ffffff5b inset,-10px -10px 50px #ffffff5b inset";
        this.style.textShadow="0 0 30px "+c3[3];
        this.style.color=c3[3];
        break;
        case "purple":
        y1.style.backgroundColor = c6[4];
        y2.style.backgroundColor = c5[4];
        y3.style.backgroundColor = c4[4];
        y4.style.backgroundColor = c3[4];
        y5.style.backgroundColor = c2[4];
        y6.style.backgroundColor = c1[4];
        po2.style.boxShadow="10px 10px 35px"+c3[4]+",-10px -10px 35px"+c3[4]+",10px 10px 50px #ffffff5b inset,-10px -10px 50px #ffffff5b inset";
        this.style.textShadow="0 0 30px "+c3[4];
        this.style.color=c3[4];
        break;
        case "ashen":
        y1.style.backgroundColor = c6[5];
        y2.style.backgroundColor = c5[5];
        y3.style.backgroundColor = c4[5];
        y4.style.backgroundColor = c3[5];
        y5.style.backgroundColor = c2[5];
        y6.style.backgroundColor = c1[5];
        po2.style.boxShadow="10px 10px 35px"+c3[5]+",-10px -10px 35px"+c3[5]+",10px 10px 50px #ffffff5b inset,-10px -10px 50px #ffffff5b inset";
        this.style.textShadow="0 0 30px "+c3[5];
        this.style.color=c3[5];
        break;
        case "red":
        y1.style.backgroundColor = c6[0];
        y2.style.backgroundColor = c5[0];
        y3.style.backgroundColor = c4[0];
        y4.style.backgroundColor = c3[0];
        y5.style.backgroundColor = c2[0];
        y6.style.backgroundColor = c1[0];
        po2.style.boxShadow="10px 10px 35px"+c3[0]+",-10px -10px 35px"+c3[0]+",10px 10px 50px #ffffff5b inset,-10px -10px 50px #ffffff5b inset";
        this.style.textShadow="0 0 30px "+c3[0];
        this.style.color=c3[0];
        break;
        
}
    
}





let aa = -1;
 let ap =[y1,y2,y3,y4,y5,y6];
btn1.onclick = function() {
    aa++;
    if(aa>ap.length-1){
        aa=-1;
    }
    x.appendChild(ap[aa]);
}
btn4.onclick = function() {
    aa++;
    if(aa>ap.length-1){
        aa=-1;
    }
    x.removeChild(ap[aa]);
}
btn5.onclick = function(){
    x.appendChild(y1);
    x.appendChild(y2);
    x.appendChild(y3);
    x.appendChild(y4);
    x.appendChild(y5);
    x.appendChild(y6);
}

let i = [
  "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
  "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
  "polygon(50% 0%,100% 40%,80% 90%,20% 90%,0% 40%)",
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
  "polygon(50% 0%,60% 20%,60% 80%,50% 100%,40% 80%, 40% 20%)",
  "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)"
];

let o = 1;
btn2.onclick = function() {
  o++;
  if (o > i.length-1) {
    o = 0;
  }
     
        y1.style.transition="2s";
        y2.style.transition="2s";
        y3.style.transition="2s";
        y4.style.transition="2s";
        y5.style.transition="2s";
        y6.style.transition="2s";
    y1.style.clipPath = i[o];
    y2.style.clipPath = i[o];
    y3.style.clipPath = i[o];
    y4.style.clipPath = i[o];
    y5.style.clipPath = i[o];
    y6.style.clipPath = i[o];
}
btn3.onclick = function(){
    
    switch(y1.style.animationPlayState){
  case "paused" :
        y1.style.animationPlayState="running";
        y2.style.animationPlayState="running";
        y3.style.animationPlayState="running";
        y4.style.animationPlayState="running";
        y5.style.animationPlayState="running";
        y6.style.animationPlayState="running";
        btn3.innerHTML="paused";
    break;
        case "running":
        y1.style.animationPlayState="paused";
        y2.style.animationPlayState="paused";
        y3.style.animationPlayState="paused";
        y4.style.animationPlayState="paused";
        y5.style.animationPlayState="paused";
        y6.style.animationPlayState="paused";
        btn3.innerHTML="run";
        break;
}
    
}
y1.style.width = "200px";
y1.style.height = "200px";
y1.style.position = "absolute";
y1.style.zIndex = "6";
y1.style.animation = "rotate 2s 0.3s infinite both paused";
//y1.style.boxShadow = "0 0 10px black";
//y1.style.border="3px solid black";

y2.style.width = "300px";
y2.style.height = "300px";
//y2.style.backgroundColor = "#F08080";
y2.style.position = "absolute";
y2.style.zIndex = "5";
y2.style.animation = "rotate 2s 0.6s infinite both paused";
//y2.style.boxShadow = "0 0 10px black";
//y2.style.border="3px solid black";


y3.style.width = "400px";
y3.style.height = "400px";
//y3.style.backgroundColor = "#DC143C";
y3.style.position = "absolute";
y3.style.zIndex = "4";
y3.style.animation = "rotate 2s 0.9s infinite both paused";
//y3.style.boxShadow = "0 0 10px black";
//y3.style.border="3px solid black";

y4.style.width = "500px";
y4.style.height = "500px";
//y4.style.backgroundColor = "#B22222";
y4.style.position = "absolute";
y4.style.zIndex = "3";
y4.style.animation = "rotate 2s 1.2s infinite both paused";
//y4.style.boxShadow = "0 0 10px black";
//y4.style.border="3px solid black";

y5.style.width = "600px";
y5.style.height = "600px";
//y5.style.backgroundColor = "#800000";
y5.style.position = "absolute";
y5.style.zIndex = "2";
y5.style.animation = "rotate 2s 1.5s infinite both paused";
//y5.style.boxShadow = "0 0 10px black";
//y5.style.border="3px solid black";

y6.style.width = "700px";
y6.style.height = "700px";
//y6.style.backgroundColor = "#4B0000";
y6.style.position = "absolute";
y6.style.zIndex = "1";
y6.style.margin="20px";
y6.style.animation = "rotate 2s 1.8s infinite both paused";
//y6.style.boxShadow = "0 0 10px black";
//y6.style.border="3px solid black";

        y1.style.transition="2s";
        y2.style.transition="2s";
        y3.style.transition="2s";
        y4.style.transition="2s";
        y5.style.transition="2s";
        y6.style.transition="2s";
        y1.style.transition="2s";