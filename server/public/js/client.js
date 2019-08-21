const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const indexMessageOne = document.querySelector('#i_msg_1')
const indexMessageTwo = document.querySelector('#i_msg_2')

weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    indexMessageOne.textContent = 'Looking at the sky...'
    indexMessageTwo.textContent = null

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                indexMessageOne.textContent = data.error
            }
            else{
                indexMessageOne.textContent = data.location
                indexMessageTwo.textContent = data.forecast
            }
        })
    })
})