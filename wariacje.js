let wariacje = [];
for (t=0;t<10;t++){
    for (s=0;s<10;s++){
        for (d=0;d<10;d++){
            for (j=0;j<10;j++){
                if(j != d && j!= t && j!= s && j!= d && d!=s && d!=t && s!=t){
                    console.log(t + "" + s + "" + d + "" + j);
                    wariacje.push(t + "" + s + "" + d + "" + j);
                }else{
                    console.log(t + "" + s + "" + d + "" + j + " skipped");
                }

            }
        }
    }
}

console.log(wariacje);

function display(){
    let a = document.getElementById("input").value;
    console.log(a);
    document.getElementById("output").innerHTML = wariacje[a];
    if(a < 0 || a > 5039 || a == ""){
        document.getElementById("output").innerHTML = "INCORRECT INPUT";
    }
}
