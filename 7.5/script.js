document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms.comment
 
    const submitButton = form.elements.submit
 
    submitButton.addEventListener("click", async (e) => {
        
        e.preventDefault()


        const username = form.elements.username.value
        const message = form.elements.message.value
 
        const body = {
            "message": message,
            "username": username
        }
 
 
 
        const responseToken = await fetch("http://10.71.4.26/challenges/1", {
            method: "POST",
        })
 
        if (responseToken.status == 201) {
 
            const token = responseToken.headers.get("Authorization")
 
            await fetch("http://10.71.4.26/comments", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "Authorization": `${token}`
                  }
            })
        }    
    })  
})