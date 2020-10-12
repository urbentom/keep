import * as React from "react";
import styled from 'styled-components';
import ComponentIconEdit from './icons/edit';
import ComponentIconDelete from './icons/delete';
import moment from 'moment';

interface Note {
	_id: string,
	title: string,
	content: string,
	favourite: boolean,
	updated: number
}
interface Props {
    note: Note
    onNoteFavourite?: any;
    onNoteDelete?: any;
    onNoteEdited?: any;
}

const NotePreviewDiv = styled.div`
    padding: 18px;
    margin: 10px;
    width: 250px;
    border-radius: 10px;
    background-color: teal;
    text-align: left;
    cursor: pointer;
`

const NotePreviewH2 = styled.h2`
    margin: 0 0 0.5em 0;
    font-size: 1.2em;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
`

const NotePreviewP = styled.p`
    margin: 0;
    font-size: 1em;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    margin-bottom: 1em;
`

const NotePreviewTime = styled.time`
    margin: auto auto auto 0;
    font-size: 1em;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
`

const NotePreviewIconContainer = styled.div`
    display: flex;
`

export default function NotePreview(props:Props) {

    return (
        <NotePreviewDiv key={props.note._id} >
            <NotePreviewH2>{props.note.title}</NotePreviewH2>
            <NotePreviewP>{(props.note.content.length > 255) ? props.note.content.substr(0, 254) + ' ...' : props.note.content}</NotePreviewP>
            <NotePreviewIconContainer>
                <NotePreviewTime>{moment().format('ll')}</NotePreviewTime>
                <ComponentIconEdit />
                <ComponentIconDelete />
            </NotePreviewIconContainer>
        </NotePreviewDiv>
    )
} 