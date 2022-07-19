
// Agregar tareas pendientes

const idInput = document.getElementById("idInput")
const sumar = document.getElementById("sumar")
const lista = document.getElementById("lista")



idInput.addEventListener("change", () =>{
    console.log(idInput.value)

})



sumar.addEventListener("click", () =>{
   lista.innerHTML += `
   <div class="cards">
        <p class="card-text">${idInput.value}</p>
   </div>
   
   `
})

