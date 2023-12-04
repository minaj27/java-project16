const navDiv=document.getElementById("nav");
const  subDiv= document.getElementById("sub");

const generateClick=(curr)=>{
        
        subDiv.innerText='';
        const h1=document.createElement("h1");
        h1.innerText = curr;
        subDiv.appendChild(h1);
}

const generateNav=(arrNav)=>{
 
    arrNav.forEach((item)=>{
        const btn=document.createElement("button");
        btn.innerText =item;
        const func =`generateClick('${item}')`
        btn.setAttribute("onclick",func)
        navDiv.appendChild(btn);
    })
}

generateNav(["Jwellary","Fashion","Mens Wear","Electronic"]);

const hr=document.createElement("hr");
navDiv.appendChild(hr);

generateNav(["Cricket","Football","Tennis","Swimming","Hockey","Chess","Kabaddi"])