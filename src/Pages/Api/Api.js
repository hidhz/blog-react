import React from 'react'
import axios from 'axios'

export default function Api(){
    const [post, setPost] = React.useState(null)
    const url = "http://hidhzdev.pythonanywhere.com/api/blog/"
    React.useEffect(() => {
	axios.get(url)
	.then(response => {
	    let data = response.data.results
	    setPost(data)
	})
    }, [])
    if(!post) return null
    return ()
}
