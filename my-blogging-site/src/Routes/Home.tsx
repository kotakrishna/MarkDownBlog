import React from 'react'
import Card from '../Components/Cards/Card';
import axios from 'axios'
export default function Home() {

    const [blogs,setBlogs]=React.useState([])
    React.useEffect(()=>{
        axios.get("http://localhost:4000/blog").then((res)=>{
          console.log(res.data.blogs);
          setBlogs(res.data.blogs)
          console.log(blogs)
         })
     },[])

    const item={
        title:"the blog",
        author:"kota",
        createdAt: "number",
        content:"# h1 \n **wow** nice",
        description:"something"
    }
    return (
        <section>
         
            <div>
        {blogs.length && blogs.map(item=><Card {...item} />)}
      </div>
        </section>
    )
}
