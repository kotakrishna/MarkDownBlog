import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';
import {random} from '../randomColGen/RandomColor'
const Div=styled.div`
    border: 1px solid black;
    padding: 5px;
    display: grid;
    grid-template-rows: 20% 10% 5% 150px 10%;
    width:50%;
    border-radius:30px;
    height: auto;
    max-height: 300px;
    margin: 2% auto;
    .Item{
        border: 1px solid black;
    }
    .readMore{
        text-align: end;
        /* margin-top:-1%; */
      padding:10px
    }
`


const Item=styled.div`
    padding: 5px;
    padding-bottom: 10%;
`

const Title =styled.div`
    padding-left:2% ;
    font-size:20px;
    padding-bottom: 10%;
`
const DatE= styled.div`
    opacity: 50% ;
`



interface IBlog{
    title:String,
    author:String,
    createdAt:any,
    content: String,
    description: String,
    _id:any
}

export default function Card({_id,title,author,createdAt,content,description}:IBlog) {
    var dt =new Date(createdAt).toLocaleDateString();
   
    var value =random()
    return (
        <Div>
            <Item>
                <Title>
                <h2>
                {title}
                </h2>
                </Title>
                </Item>
            <Item>
                <DatE>
                {`${dt} By ${author}`}
                </DatE>
                </Item>
            <hr  style={{
                color: `${value}`,
                backgroundColor: `${value}`,
                height: 5,
                width: "90%" ,
                borderColor : `${value}`,
            }}/>

            <Item>
                <span>
                    <ReactMarkdown>
                   {`${content.slice(0,30)}`}
                    </ReactMarkdown>
                </span>
            </Item>
            <Item className="readMore">
                {/* <ReadMore> */}
                <Link to={`/blog/${_id}`} style={{textDecoration: 'none', listStyle:'none'}}>
                Read More...
                </Link>
                {/* </ReadMore> */}
                </Item>
        </Div>
    )
}
