import React, { Component, MouseEvent } from "react";
import styled from 'styled-components';
import ComponentIconEdit from './icons/edit';
import ComponentIconDelete from './icons/delete';
import moment from 'moment';
import tinycolor from 'tinycolor2';

import { Note } from '../helpers/interfaces';

type Props = {
    note: Note
    onNoteFavourite(note:Note): void
    onNoteDelete(note:Note): void
    onNoteEdited(note:Note): void
}

type State = {
    isExtended: boolean;
    editEnabled: boolean;
}

export default class NotePreview extends Component< Props, State> {

    static defaultProps = {
        onNoteDelete: (note:Note) => {},
        onNoteEdited: (note:Note) => {},
        onNoteFavourite: (note:Note) => {}
    }

    constructor(props:Props){

        super(props);

        this.state = {
            isExtended: false,
            editEnabled: false,
        }

    }

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

    onNotePreviewClick = () => {
        this.setState({
            isExtended: !this.state.isExtended
        })

    }

    onEditClick = () => {

    }

    onDeleteClick = (e:MouseEvent) => {
        e.stopPropagation();
        this.props.onNoteDelete(this.props.note)
    }

    render(){

        const NoteText = (!this.state.isExtended)? (this.props.note.content.length > 255) ? this.props.note.content.substr(0, 254) + '...' : this.props.note.content : this.props.note.content;

        return (
            <this.NotePreviewDiv key={this.props.note._id} onClick={this.onNotePreviewClick}>
                <this.NotePreviewH2>{this.props.note.title}</this.NotePreviewH2>
                <this.NotePreviewP>{NoteText}</this.NotePreviewP>
                <this.NotePreviewIconContainer>
                    <this.NotePreviewTime>{moment().format('ll')}</this.NotePreviewTime>
                    <ComponentIconEdit colour={this.props.note.colour} />
                    <ComponentIconDelete colour={this.props.note.colour} onClick={this.onDeleteClick} />
                </this.NotePreviewIconContainer>
            </this.NotePreviewDiv>
        )


    }
} 