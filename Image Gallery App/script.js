let image=[
    ["clothes1.jpg","clothes2.jpg","clothes3.jpg"],
    ["bags1.jpg","bags2.jpg","bags3.jpg"],
    ["cup1.jpg","cup2.jpg","cup3.jpg"],
    ["foot1.jpg","foot2.jpg","foot3.jpg"],
    ["image.png","watches.jpg","watches2.jpg"]
]


document.querySelectorAll(".nav-options").forEach((element,elementIndex)=>{

    element.addEventListener("click", ()=>{
        if(elementIndex!=0){
            showImagesFiltered(elementIndex);
        }
        else{
            showAllImages();
        }
    })    
})
function showImagesFiltered(index){

    let container = document.querySelector(".image-container");

    container.innerHTML = "";
    removeOtherfilteredCSS();
        
    document
        .querySelectorAll(".nav-options")[index]
        .classList.add("filter-selected");

    for(let i = 0; i < image[index-1].length; i++){

        let newElement = document.createElement("div");
        newElement.className = "image-item";

        let imgElement = document.createElement("img");

        imgElement.src = "images/" + image[index-1][i];

        newElement.appendChild(imgElement);

        container.appendChild(newElement);

    }

}

function showAllImages(){

    let container=document.querySelector(".image-container")
    container.innerHTML="";
    removeOtherfilteredCSS();
    document.querySelectorAll(".nav-options")[0].classList.add("filter-selected")

    for(let i=0; i<image.length; i++){

        for(let j=0; j<image[i].length; j++){

            let newElement = document.createElement("div");
            newElement.className = "image-item";

            let imgElement = document.createElement("img");

            imgElement.src = "images/" + image[i][j];

            newElement.appendChild(imgElement);

            container.appendChild(newElement);

        }
       
        
    }
}

function removeOtherfilteredCSS(){
    let allFilters=document.querySelectorAll(".filter-selected")
    for(let i=0; i<allFilters.length; i++){
        allFilters[i].classList.remove("filter-selected")
    }

}
