const panels = document.querySelectorAll('.panel');

panels.forEach((panel) =>{
    panel.addEventListener('click', () => {
        removeActivaClasses()
        panel.classList.add('active')
    })
})

function removeActivaClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}