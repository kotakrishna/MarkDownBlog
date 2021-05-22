import React from 'react'
import styled from 'styled-components';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
const Section = styled.section`
    width:80%;
    border: 1px solid black;
    margin: auto;
    display: grid;
    justify-content: center;
    & Input{    
        width:80vh;
        border-radius: 10px;
        border:none;
        height:50px;
        font-size:22px;
        padding:5px;
        margin-bottom: 100px;
        /* outline: none; */
        /* text-align:center; */
    };
    & Form{
        text-align: center;
        font-size: 18px;
    }
    
`


const Description= styled.textarea`
     width:80vh;
        border-radius: 10px;
        height:30px;
        font-size:22px;
        padding:5px;
        margin-bottom: 100px;
        border: none;
        
    /* outline: none; */
` 

const Content = styled.textarea`
    padding:30px;
    font-size:20px;
    width: 80vh;
    height:80vh;
    resize: horizontal;
    resize: none;
    border: 1px solid #c7c7c7 ;
    border-radius:20px;
    outline: none;
`

const Button = styled.button`
    padding: 15px;
    width:200px;
    height:auto;
    background-color:#008b00b7;
    color: white;
    font-size: 20px;
    border-radius:10px;
`;

export default function AddBlog() {

    const [title,setTitle] =React.useState("")
    const [description,setDescription] =React.useState("")
    const [content,setContent] =React.useState("")

    const handlePost=(e:any)=>{
        e.preventDefault();
        const payload={
            title:title,
            description:description,
            content:content,
            userId:"kota"
        }
        axios.post("http://localhost:4000/add-blog",payload).then(res=>
        {
            console.log("posted successfully",res);
            return <Redirect to="/" />
        })
    }

    return (
        <Section>
            <div>
            <h1>Add Blog </h1>
            </div>
            <form className="Form" onSubmit={handlePost}>
                <div>
                    {/* <label htmlFor="">
                        Title
                    </label> */}
                    <br />
                    <input className="Input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" type="text" name="title" id="" />
                </div>
                <div>
                    <Description placeholder="Add Description" value={description} onChange={e=>setDescription(e.target.value)} name="" id=""  ></Description>
                </div>
                <div >
                    <Content wrap="on" name="" value={content} onChange={e=>setContent(e.target.value)} placeholder="Enter You Blog Here" className="content" id=""  ></Content>
                </div>
            </form>.

            <div className="buttons">
                    <Button onClick={handlePost}>
                        Post
                    </Button>
            </div>
        </Section>
    )
}
