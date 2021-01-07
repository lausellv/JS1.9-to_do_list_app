     //1. Adding a new item to the list of items: 
//javascript
//1. function newItem(){
    //    let li = document.createElement("li");
    //    let inputValue = document.getElementById("input").value;
    //    let text = document.createTextNode(inputValue);
    //    li.appendChild(text);
       //    if (inputValue === '') {
    //      alert("You must write something!");
    //    } else {
    //      let list = document.querySelector('#list');
    //      list.appendChild(li);
    //    }

    //2. Crossing out an item from the list of items:
// javascript option 
// function crossOut() {
//     li.classList.toggle("strike");
// }
// li.addEventListener("dblclick", crossOut);


    //1. JQuery  option
function newItem(){
    let li = $('<li></li>');  // assigns a new list to li
let inputValue = $('#input').val(); // assigns the user input to inputValue
li.append(inputValue);  // adds the user input to li

//to make sure that the user input is not empty. if it isin't it will add it to the list

let list = $('#list');
if (inputValue === '') {
    alert("You must write something!");
} else {
    list.append(li);

}
 //2. JQuery option
   
li.on('click', function () {
    li.toggleClass('strike');   // this toggles the 'strike' class when you click on an item on the list
});
          
    //3(i). Adding the delete button "X": 
    //javacript option
    //    let crossOutButton = document.createElement("crossOutButton");
    //      crossOutButton.appendChild(document.createTextNode("X"));
    //      li.appendChild(crossOutButton);
    
    //      crossOutButton.addEventListener("click", deleteListItem);
    //  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    //    function deleteListItem(){
    //          li.classList.add("delete")
    //      }
    // }
    
//3.1 adding the xButton (delete button)
//Jquery Option
    let xButton = $('<xButton>X</xButton>'); // creating an xButton
    //xButton.append(document.createTextNode('x')); // cld be another option
    li.append(xButton); //adding the xbutton to li
//3.2 adding class delete (display:none) from the css
xButton.on('click', function (){
    li.addClass('delete')
});
    
     // 4. Reordering the items: 
     //JQuery - it was already in jQuery
      list.sortable();
    //    $('#list').sortable();
}
    
    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
    
    
    
    
    
    
    
    
      /*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */
    
    
    
    
    
    
    
    
    
    
    