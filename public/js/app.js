console.log('Running client-side javascript code')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+search.value).then(response => {
        response.json().then( (data) => {
            if(data.error){
                messageOne.textContent = 'Error!'
                messageTwo.textContent= data.error
                return
            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecastData
        })
    })
})