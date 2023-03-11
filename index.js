let ourForm = document.getElementById("ourForm")
let ourList = document.getElementById("ourList")
ourForm.addEventListener("submit", (e) => {
 e.preventDefault()
 createIteme(ourField.value)
})

function createIteme(x){
 let ourHtml = `<li>${x}<button onclick ="deletItme(this)">Delete</button></li>`    
 ourList.insertAdjacentHTML("beforeend" , ourHtml)
 ourField.value = ""
 ourField.focus()
}

function deletItme (elementToDelete){
 elementToDelete.parentElement.remove()
}