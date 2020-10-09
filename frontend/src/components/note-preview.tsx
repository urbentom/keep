import * as React from "react";
import styled from 'styled-components';

interface Props {
    title: String;
    content: String;
}

const NotePreviewDiv = styled.div`
    padding: 24px;
    margin: 10px;
    width: 300px;
    border-radius: 10px;
    background-color: teal;
    text-align: left;
`

const NotePreviewH2 = styled.h2`
    margin: 0 0 0.5em 0;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
`

const NotePreviewP = styled.p`
    margin: 0;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
`

export default function NotePreview(props:Props) {

    return (
        <NotePreviewDiv>
            <NotePreviewH2>{props.title}</NotePreviewH2>
            <NotePreviewP>{(props.content.length > 255) ? props.content.substr(0, 254) + ' ...' : props.content}</NotePreviewP>
        </NotePreviewDiv>
    )

} 