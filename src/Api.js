import React from 'react'
import axios from 'axios'

export default function GetApi(){
    const [post, setPost] = React.useState(null)
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
    const url = "http://hidhzdev.pythonanywhere.com/api/blog/"

    React.useEffect(() => {
	axios.get(url)
	.then((response) => {
	    const data = response.data.results
	    setPost(data)
	})
    }, [])

    if(!post) return null
    return (
	post.map((blog) => {
	    return (
		<div className="container px-8 pt-4">
		    <h1 className="text-xl">{blog.judul}</h1>
		</div>
	    )
        })
    )
}
