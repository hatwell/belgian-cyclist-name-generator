console.log('belgium')

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const firstNames = [
    'Jan',
    'Hendrik',
    'Pieter',
    'Willem',
    'Jacob',
    'Dirk',
    'Arie',
    'Johan',
    'Albert',
    'Simon',
    'Wout',
    'Matthieu'
]

const middleNames = [
    'Van',
    'Von',
    'Von der',
    'Van der',
    'De'
]

const lastNames = [
'Peeters',
'Janssens',
'Maes',
'Jacobs',
'Mertens',
'Willems',
'Claes',
'Goossens',
'Wouters',
'Smet'
]

const getFirstName = () =>  firstNames.random() 
const getMiddleName = () => middleNames.random()
const getLastName = () =>  lastNames.random()

const showNameIntroText = () => {
    const intro = document.getElementById('name-intro')
    intro.removeAttribute('hidden')
}



const generateName = () =>{
    showNameIntroText()
    setTimeout(()=> {
         const nameSpan = document.getElementById('full-name') 
        nameSpan.innerText = `${getFirstName()} ${getMiddleName()} ${getLastName()}`
    },
    1000)
   
}