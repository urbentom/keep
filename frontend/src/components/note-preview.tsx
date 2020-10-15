import React, { Component } from "react";
import styled from 'styled-components';
import ComponentIconEdit from './icons/edit';
import ComponentIconDelete from './icons/delete';
import moment from 'moment';
import tinycolor from 'tinycolor2';

import { Note } from '../helpers/interfaces';

interface Props {
    note: Note
    onNoteFavourite?: any;
    onNoteDelete?: any;
    onNoteEdited?: any;
}

export default class NotePreview extends Component< Props, {}> {

    NotePreviewDiv = styled.div`
        display: inline-block;
        padding: 24px;
        margin: 10px 0;
        width: 250px;
        border-radius: 10px;
        background-color: ${props => this.props.note.colour};
        text-align: left;
        cursor: pointer;
        // height: max-content;
        transition: background-color 0.5s ease-in-out;
        &:hover{
            transition: background-color 0.5s ease-in-out;
            background-color: ${props => tinycolor(this.props.note.colour).lighten(2).toHexString()};
        }
    `

    NotePreviewH2 = styled.h2`
        margin: 0 0 1em 0;
        font-size: 1.2em;
        color: #2c241c;
        font-weight: 500;
    `

    NotePreviewP = styled.p`
        margin: 0;
        font-size: 1em;
        color: #2c241c;
        font-weight: 300;
        line-height: 1.4em;
        margin-bottom: 2em;
    `

    NotePreviewTime = styled.time`
        margin: auto auto auto 0;
        font-size: 1em;
        color: #2c241c;
        font-weight: 400;
    `

    NotePreviewIconContainer = styled.div`
        display: flex;
    `

    render(){

        return (
            <this.NotePreviewDiv key={this.props.note._id} >
                <this.NotePreviewH2>{this.props.note.title}</this.NotePreviewH2>
                <this.NotePreviewP>{(this.props.note.content.length > 255) ? this.props.note.content.substr(0, 254) + ' ...' : this.props.note.content}</this.NotePreviewP>
                <this.NotePreviewIconContainer>
                    <this.NotePreviewTime>{moment().format('ll')}</this.NotePreviewTime>
                    <ComponentIconEdit colour={this.props.note.colour} />
                    <ComponentIconDelete colour={this.props.note.colour} />
                </this.NotePreviewIconContainer>
            </this.NotePreviewDiv>
        )


    }
} 