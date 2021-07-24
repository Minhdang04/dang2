let a=prompt("nhập số từ 4 đến 20")
if (a <4  || a > 20){
 console.log("số bạn điền không hợp lệ")
} 
else if(a==4 || a==5){
 console.log("số chẵn là 4")
}

else if( a==6 || a==7){
 console.log("số chắn là 4 và 6")
}
else if( a==8 || a==9){
 console.log("số chắn là 4 , 6 và 8")
}
else if( a==10 || a==11){
 console.log("số chắn là 4 , 6 , 8 và 10")
}
else if( a==12 || a==13){
 console.log("số chắn là 4 , 6 , 8 , 10 và 12")
}
else if( a==14 || a==15){
 console.log("số chắn là 4 , 6 , 8 , 10 , 12 và 14")
}
else if( a==16 || a==17){
 console.log("số chắn là 4 , 6 , 8 , 10 , 12 , 14 và 16")
}
else if( a==18 || a==19){
 console.log("số chắn là 4 , 6 , 8 , 10 , 12 , 14 , 16 và 18")
}
else if (a==20) {
for (var i = 4; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
}

var N = prompt('Nhap gia tri N')
N = parseInt(N)
for(i=0;i<N;i++) {
    for(j=0;j<=i;j++) {
        document.write(" 1 ")
    }
    document.write("<br/>")
}
