// var todo = document.getElementById('todo')
// function add(){
//     var inputData = document.getElementById('inpt');

//     let newTodo = "<li> <span onClick='toggle(this)'> " + inputData.value + "</span>" + "<span onClick='removeItem(this)'> [x] </span> " + " </li>"

//     todo.insertAdjacentHTML('afterbegin', newTodo);

//     inputData.value = ""

// }


// function toggle(el) {
//     el.classList.toggle('done')
// }

// function removeItem(el) {
//     el.parentElement.remove()
// }


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const jumbo = document.querySelector(".jumbo")
const span = document.getElementsByClassName("close")[0];

// ketika btn diklik munculkan modal
btn.onclick = function() {
  modal.style.display = "block";
}

// sembunyikan modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// detail modal
modal.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
    }
})