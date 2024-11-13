const addtask=document.querySelector(".add")
const tas=document.querySelector(".tasks")
let c=document.querySelectorAll("li")
const count=document.querySelector(".count");
const search=document.querySelector(".search")
let s=c.length
 





addtask.addEventListener("submit",event =>{
    event.preventDefault();
    const value=addtask.task.value.trim();
    if (value){
        tas.innerHTML+=`<li>${value}<i class="bi bi-trash-fill delete"></i></li>`;
        
addtask.reset()
 s+=1
    count.innerHTML=`you have ${s} pending tasks`

    }
   

})



//delete task
const lis=document.querySelector("li")
tas.addEventListener("click",event=>{
    if (event.target.classList.contains("delete")){
        event.target.parentElement.remove()
        s-=1;
        count.innerHTML=`you have ${s} pending tasks`
        
    }
})



// clear all
const clear=document.querySelector(".clear")

clear.addEventListener("click",event=>
    {tas.remove()
    s=0;
    count.innerHTML=`you have ${s} pending tasks`}
)


//default task


count.innerHTML=`you have ${s} pending tasks`


function filterfun(term){

    Array.from(tas.children)
    .filter(event=>
        {return !event.textContent.toLowerCase().includes(term)}
    )
    .forEach(task=>{task.classList.add("hide")})
    Array.from(tas.children)
    .filter(event=>
        {return event.textContent.toLowerCase().includes(term)}
    )
    .forEach(task=>{task.classList.remove("hide")})
}

// search bar


search.addEventListener("keyup",event=>{
    const term=search.tasker.value.toLowerCase();
    filterfun(term)}
)

const reset=document.querySelector(".reset")
reset.addEventListener("click",event=>{search.reset()
    const term=search.tasker.value;
    filterfun(term)}
)



