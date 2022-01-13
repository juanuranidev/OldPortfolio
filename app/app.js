// Navegación
let botonParaMostrarMenu = document.getElementById("botonParaMostrarMenu")
let botonParaCerrarMenu = document.getElementById("botonParaCerrarMenu")
let nav = document.getElementById("nav")
let seccion = document.getElementsByClassName("seccion")

botonParaMostrarMenu.addEventListener('click', () => {
    nav.className += "activo"
    botonParaCerrarMenu.addEventListener('click', () => nav.classList.remove("activo"))
    for(let link of seccion) {link.addEventListener('click', () => nav.classList.remove("activo"))}
})


// Enviar email
let form = document.getElementById("form")
let contacto = document.getElementById("contacto")
form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const newForm = new FormData(this)
    console.log(newForm.get('name'))
    let invisible = document.createElement("a")
    invisible.id="invisible"   
    invisible.setAttribute('href', `mailto:juanignaciouranimm@gmail.com?subject=${newForm.get('name')} - ${newForm.get('asunto')}&body=${newForm.get('message')}`)
    invisible.click()
    contacto.innerHTML=`<p>Fuiste redireccionado a la aplicación de email</p>`
}
        
