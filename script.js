console.log('belgium')

const getFirstName = () => 'Kenny'
const getMiddleName = () => "Van"
const getLastName = () => 'Pop'

const showNameIntroText = () => {
    const intro = document.getElementById('name-intro')
    intro.removeAttribute('hidden')
    const dots = document.createElement('span')
    dots.innerText = '...'
    intro.appendChild(dots)
}

const generateName = () =>{
    showNameIntroText()
    setTimeout(()=> {
         const nameSpan = document.getElementById('full-name') 
        nameSpan.innerText = `${getFirstName()} ${getMiddleName()} ${getLastName()}`
    },
    1000)
   
}