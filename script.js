// document.getElementsByTagName returns an HTML
// collection which is in the form of an array.

//document.getElementsByClassName also returns an
//HTML collection.

//getElementById method returns a value 

// So the previous two methods result in the return of
//HTML collection and the getElementById returns 
//a single value.

// document.querySelector
// The first instance of the element is selected
//with this command
// document.querySelectorAll

//Collection of the document elements is called as
//HTML collection.

//collection of document nodes(element, attributes and text)
//is a NodeList

//HTML collection can be accessed via an Id, name or
//index number. This is also a live collection.

//NodeList can only be accessed by the index number.
//It is a static collection in that the addition
//of an element via DOM is not immediately reflected 
//in the NodeList

//The childnode property returns a live NodeList

//Several of the methods that are avaiable to the 
//array isn't available for NodeList. It is reiterated
// time and again that NodeList may seem as an array in 
// all likelihood but that is not the case.

// var button  = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseover",function () {
//     console.log("Button clicked !!!");
// });

var button  = document.getElementById("enter");
var input  = document.getElementById("userinput");
// var ul = document.querySelector("ul");
var ol = document.querySelector("ol");


// var listItem = document.querySelectorAll("li");
//Caching the values in a variable

function inputLength(){
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ol.appendChild(li);
        input.value = "";
        // li.setAttribute("class","list-style:none");
    var del = document.createElement("button");
        del.appendChild(document.createTextNode("Delete"));
        ol.appendChild(del);
        del.setAttribute("class","btn btn-danger");

        function toggle(){
            li.classList.toggle("done");
        }

        li.addEventListener("click",toggle);

        // if(li.addEventListener("click",function toggle(){
        //     li.classList.toggle("done");
        // }));
        function deleteItem(){
            li.remove();
            del.remove();
        }

        del.addEventListener("click",deleteItem);
}


function keyPress(event) {
    {
        if(inputLength() > 0 && event.key === 'Enter')
        {
            createListElement();
        }
        else if(inputLength() <= 0 && event.key === 'Enter')
        {
            alert("Nothing Entered");
        }
    }
}

function buttonClick() {
    if(inputLength() > 0)
    {
        createListElement();
    }
    else{
        alert("Nothing entered");
    }
}

// function toggleList(){
//     listItem.classList.toggle("done");
// }

// function checkList(){
//     for (var index = 0; index < listItem.length; index++) {
//         listItem[index].addEventListener("click",function(){
//             listItem[index].classList.toggle("done");
//         });
//     }
// }

//we are passing the functions as arguments in the form of reference but not calling them directly instead.
//That code calls back the function when a certain event takes place or a condition gets satisfied.
//So the functions passed in as argument to another function just as below is technically called "a callback 
//function";
//Event for button click
button.addEventListener("click",buttonClick);

//Event for keypress
input.addEventListener("keypress",keyPress);

// listItem.forEach(checkList);





