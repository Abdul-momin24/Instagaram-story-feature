let arr= [
    {
        dp:"https://plus.unsplash.com/premium_photo-1661335230808-4ab5cd9c9245?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1605643044751-13cdf50ced23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" 
    },
    {
        dp:"https://images.unsplash.com/photo-1608015858041-f28d2514e8a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://plus.unsplash.com/premium_photo-1668127295858-552a0ef56309?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" 
    },
    {
        dp:"https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1611333009930-ae12e41ff0f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzJTIwaW1hZ2VzfGVufDB8fDB8fHww" 
    },

    {
        dp:"https://images.unsplash.com/photo-1612751747121-543c0be0f58f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzJTIwaW1hZ2VzfGVufDB8fDB8fHww" 
    },
];
let fullScreen=document.querySelector("#fullScreen");
let stories = document.querySelector("#stories")
let clutter="";
let flag = 0;

arr.forEach(function(elem,idx){
    clutter += `<div id="story">
    <img id="${idx}" src="${elem.dp}">
</div>`
})

stories.innerHTML=clutter;


stories.addEventListener("click",(dets)=>{
    if(flag==0){
        fullScreen.style.zIndex="1";
    fullScreen.style.backgroundImage=`url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        fullScreen.style.height="0";
        fullScreen.style.width="0";
        console.log("123456")

    },1500);
    fullScreen.style.height="100%";
    fullScreen.style.width="100%";
    }
    

    
})