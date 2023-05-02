export function setProfile () {
    const userId = JSON.parse(sessionStorage.getItem('userId'))
    if (!userId) {
      if (document.getElementById("userBox")) {
      document.getElementById("userBox").remove()
      }
      return
    }
    const endpoint = `/api/user/${userId}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  
    fetch(endpoint, options)
    .then((response) => {
      if ( response.status === 200 ) {return response.json()}
      else throw response
    }).then((data) => {
      document.getElementById("usernameDisplay").innerHTML = `${data.username}`
      document.getElementById("emailDisplay").innerHTML = `${data.email}`
      document.getElementById("profilePic").src = `${data.picture}`
      document.getElementById("userBox").hidden = false
    }).catch(() => {
      document.getElementById("usernameDisplay").innerHTML = 'Guest User'
      document.getElementById("emailDisplay").innerHTML = 'guest@gmail.com'
      document.getElementById("profilePic").src = '/public/icon.png'
      //document.getElementById("userBox").
    })
}