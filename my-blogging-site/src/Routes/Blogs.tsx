import axios from 'axios';
import React from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {random} from '../Components/randomColGen/RandomColor'
// import axios from 'axios'



const Section = styled.section`
    display: grid;
    width:80%;
    margin: auto;
    grid-template-rows: 100px 20px 5px auto 200px ;
`


export default function Blogs() {
    const {id}:any= useParams();
    let flag:any=false;
    console.log(id)
    const [blog,setBlog] =React.useState({})
    React.useEffect(()=>{
        axios.get(`http://localhost:4000/get-blog/${id}`).then((res)=>{
            console.log(res.data.blog);
            setBlog(res.data.blog);
            // flag=true;
            console.log(blog)
        })
    },[])

    // if(flag){
    var {title,description,content,createdAt}:any = blog
    // }
    
    var value =random()
    return (
        <Section>
            <div>

            <h1>
                {title}
            </h1>
            </div>
            <div>
                <span>
                    {description}
                </span>
            </div>
            <hr  style={{
                color: `${value}`,
                backgroundColor: `${value}`,
                height: 10,
                width: "100%" ,
                borderRadius:"15px" ,
                borderColor : `${value}`,
            }}/>
            <div>
                <ReactMarkdown>
                    {content}
                </ ReactMarkdown>
            </div>
            <div>
                the buttons
            </div>
        </Section>
    )
}
