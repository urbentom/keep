import React, { Component } from 'react';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';

import Navigation from './components/navigation'
import NotePreview from './components/note-preview';
import Request from './helpers/request';
interface Note {
	_id: string,
	title: string,
	content: string,
	favourite: boolean,
	updated: number
}

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
				"query": "{ notes { _id title content favourite updated } }"
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

	}

	onNoteEdited = (note:Note) => {

	}

	KeepContainer = styled.div`
		display: flex;
	`

	NoteContainer = styled.div`
		display: grid;
	`

	render(){

		return (
			<this.KeepContainer>
				<Navigation/>
				<this.NoteContainer>

				{
					this.state.notes.map( (note:Note) => {
					
						return ( <NotePreview note={note} onNoteDelete={this.onNoteDelete} onNoteEdited={this.onNoteEdited} /> )
					
					})	
				}

				</this.NoteContainer>
			</this.KeepContainer>
		)

	}

}

