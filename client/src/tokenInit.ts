import axios from 'axios'

const isLoggedIn = async (token: any) => {
    const result = await axios.get("http://localhost:5000/api/auth/", {
        headers: {
          'auth-token': token
        }
      })
      if(result.data.success === false || !result.data.success) {
        localStorage.removeItem('token')
        window.location.reload()
      }
    }


const checkToken = () => {
  const token = localStorage.getItem('token')
  if(token) isLoggedIn(token)
}

export default checkToken