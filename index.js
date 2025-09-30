// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(res => res.json())
    .then(data => {
       document.body.innerHTML = `<p>${data.id}</p>`
    
    })
    .catch(error => {
        document.body.innerHTML = `<p>${error.message}</p>`
    }
    )
}
let name = 'collins'
let email = 'collinsKibet@gmail.com'
console.log(submitData(name,email))