const progress=document.getElementById('progress');
const next= document.getElementById('next');
const prev= document.getElementById('prev');
const circles=document.querySelectorAll('.circle');

let currActive=1;

next.addEventListener('click',()=>{
    currActive++;
    
    if(currActive>circles.length){
        currActive=circles.length;
        
    }
    console.log(currActive);
   update(currActive);
}
)

prev.addEventListener('click',()=>{
    currActive--;
    
    if(currActive<1){
        currActive=1;
    }   
    console.log(currActive);
    update(currActive);
    }
)

function update(currActive){

    circles.forEach((circle,i)=>{
        if(i<currActive){
            circle.classList.add('active');
        } 
        else{
            circle.classList.remove('active');
        }
    }
    )

    const actives=document.querySelectorAll('.active');
    console.log((actives.length)/(circles.length) * 100 + '%');


    progress.style.width=(actives.length-1)/(circles.length-1) * 100 + '%';


    if(currActive==1){
        prev.disabled=true;
    }
    else if(currActive==4){
        next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}