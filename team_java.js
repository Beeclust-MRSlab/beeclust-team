const domain = document.querySelectorAll('.domain')
const icon = document.querySelectorAll('.icon')
const side = document.querySelectorAll('.side')
const domain_con_p = document.querySelector('.domain_con p')
const svg = document.querySelector('.burger-class')
const navbar = document.querySelector('.nav_links_con_reponsive')

let h,currenIndex=0

{
    display_none()
    domain[0].style.display = "block"
    set_height(0)
    navbar.style.display = "none"
}

function display_none(){
    for(i=0;i<domain.length;i++)
        domain[i].style.display = "none"
}

icon.forEach( (element,index) => {
    element.addEventListener('click' , () => {
        display_none()
        domain[index].style.display = "block"
        h = domain[index].offsetHeight 
        currenIndex = index
        set_height(index)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
})

function set_height(index){
    h = domain[index].offsetHeight + 40
    side[0].style.height = h + 'px'
    side[1].style.height = h + 'px'
}

window.addEventListener('resize' , () => {
    h = domain[currenIndex].offsetHeight
    set_height(currenIndex)
})

svg.addEventListener('click' , () =>{
    if(navbar.style.display === "none"){
        navbar.style.display = "block"}
    else{
        navbar.style.display = "none"}
})