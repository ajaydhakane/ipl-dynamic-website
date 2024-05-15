let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let a4=document.getElementById("a4");

let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");

let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
let c4=document.getElementById("c4");

let d1=document.getElementById("d1");
let d2=document.getElementById("d2");
let d3=document.getElementById("d3");
let d4=document.getElementById("d4");    

let count=0;

document.getElementById("btn").onclick=function()
{
    count = 0;

    if(a1.checked)
    {
        console.log("WRONG!!!");
    }
    else if(a2.checked)
    {
        console.log("WRONG!!!");
    }
    else if(a3.checked)
    {
        console.log("WRONG!!!");
    }
    else if(a4.checked)
    {
        console.log("RIGHT!!!");
        count++;
        document.getElementById("h").classList.add("correct");
    }
    else
    {
        console.log("!!!1NOT CHOSE ANY OPTION!!! "); 
    }

    if(b1.checked)
    {
        console.log("RIGHT!!!");
        count++;
        document.getElementById("j").classList.add("correct");
    }
    else if(b2.checked)
    {
        console.log("WRONG!!!");
    }
    else if(b3.checked)
    {
        console.log("WRONG!!!");
    }
    else if(b4.checked)
    {
        console.log("WRONG!!!");
    }
    else
    {
        console.log("!!!1NOT CHOSE ANY OPTION!!! "); 
    }

    if(c1.checked)
    {
        console.log("WRONG!!!");
    }
    else if(c2.checked)
    {
        console.log("RIGHT!!!");
        count++;
        document.getElementById("k").classList.add("correct");
    }
    else if(c3.checked)
    {
        console.log("WRONG!!!");
    }
    else if(c4.checked)
    {
        console.log("WRONG!!!");
    }
    else
    {
        console.log("!!!1NOT CHOSE ANY OPTION!!! "); 
    }

    if(d1.checked)
    {
        console.log("RIGHT!!!");
        count++;
        document.getElementById("l").classList.add("correct");
    }
    else if(d2.checked)
    {
        console.log("RIGHT!!!");
    }
    else if(d3.checked)
    {
        console.log("RIGHT!!!");
    }
    else if(d4.checked)
    {
        console.log("RIGHT!!!");
        count++;
    }
    else
    {
        console.log("!!!1NOT CHOSE ANY OPTION!!! "); 
    }

    document.getElementById("ans").innerHTML="😍CONGRATULATIONS 😍U GOT  "+ count +"  MARKS OUT OF 4";
}
