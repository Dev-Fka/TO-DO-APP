var click= document.querySelector("#adder");
var text =document.querySelector("#content");
var DeleteList =document.querySelector("ul");
addEventListener();

function addEventListener (){
    click.addEventListener("click",addListİtem);
    DeleteList.addEventListener("click",Delete);
}

function addListİtem(e){
    if(text.value==""){
        alert("Boş bırakmayınız!")
    }
    else{
        function addLi(){
            var element =document.createElement("li");
            document.querySelector(".list-group").appendChild(element);
            element.classList.add("list-group-item")
            element.innerHTML=text.value;
        }
        function addli_icon(){
            var icon = document.createElement("button");
            document.querySelector("li:last-child").appendChild(icon);
            icon.classList.add("float-end");
            icon.id="deleter";
            icon.innerHTML='<i class="fas fa-trash fa-2x"></i>';
        }
        addLi();
        addli_icon();
        text.value="";
    } 
    e.preventDefault();
}

function Delete(e){
    if(e.target.className==="fas fa-trash fa-2x"){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}


//basınca silinecek.iconun txipi çöp kutusu olacak.