import React from 'react'
import styled from 'styled-components'

const Section =styled.section`
    background: #dfdfdf;
    color:black;
    width:100%;
    height:200px;
    display: grid;
    place-items: center;
    
`
export default function Footer() {
    return (
        <footer>
            <Section>
            The Footer of the Markdown Blog
            </Section>
        </footer>
    )
}
