import React, { Component } from 'react';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';

import Navigation from './components/navigation'
import NotePreview from './components/note-preview';
import Request from './helpers/request';

import { Note } from './helpers/interfaces';

type AppProps = {}

type AppState = {
	notes: Note[]
}

export default class App extends Component< AppProps, AppState> {

	constructor(props:AppProps){

		super(props)

		this.state = {
			notes: []
		}

	}

	componentDidMount(){

		const request = new Request('http://localhost:3001')
		const getNotes = 
			{
				"query": "{ notes { _id title content favourite colour updated } }"
			}



		request.query(getNotes)
			.then( (res:AxiosResponse) => {

				this.setState({
					notes : res.data.data.notes
				})

			})
			.catch( (err) => {
				console.log('err', err)
			})


	}

	onNoteDelete = (note:Note) => {
		console.log(note);
	}

	onNoteEdited = (note:Note) => {

	}

	KeepContainer = styled.div`
		display: flex;
	`

	NoteContainer = styled.div`
		// display: flex;
		// flex-wrap: wrap;
		column-width: 260px;
		column-gap: 5px;
	`

	NoteTitle = styled.h1`
		width: 100%;
		height: fit-content;
		margin: 0;
		padding 20px 0;
	`

	NoteHeader = styled.div`
		padding 20px;
	`

	render(){

		return (
			<this.KeepContainer>
				<Navigation/>
				<this.NoteHeader>
					<this.NoteTitle>Notes</this.NoteTitle>
					<this.NoteContainer>
						{
							this.state.notes.map( (note:Note) => {
							
								return ( <NotePreview note={note} onNoteDelete={this.onNoteDelete} onNoteEdited={this.onNoteEdited} /> )
							
							})	
						}
					</this.NoteContainer>
				</this.NoteHeader>
			</this.KeepContainer>
		)

	}

}

