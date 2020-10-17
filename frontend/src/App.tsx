import React, { Component, MouseEvent } from 'react';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';

import Navigation from './components/navigation'
import NotePreview from './components/note-preview';
import ComponentPopup from './components/popup';
import Request from './helpers/request';

import { Note, Popup } from './helpers/interfaces';
import { getNotes, removeNote } from './helpers/queries';

type AppProps = {}

type AppState = {
	notes: Note[]
	popup: Popup
}

export default class App extends Component< AppProps, AppState> {

	constructor(props:AppProps){

		super(props)

		this.state = {
			notes: [],
			popup: {
				buttons: []
			}
		}

	}

	request = new Request('http://localhost:3001');

	componentDidMount(){

		this.request.query(getNotes())
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

		this.setState({
			popup:{
				title: 'Would you like to delete this Note?',
				content: `By deleting the Note "${note.title}" you will not be able to recover it's content`,
				buttons: [
					{
						content: 'Delete',
						primary: true,
						onClick: (e:MouseEvent) => {
							this.request.query(removeNote(note._id))
								.then( (res:AxiosResponse) => {

									// Add notification code here
									// res.data.data.removeNote.message

									this.setState({
										notes: this.state.notes.filter( (filteredNote) => {return note._id !== filteredNote._id } )
									})

									this.closePopup();

								})
								.catch( (err) => {
									console.log('err', err)
								})
						}
					},
					{
						content: 'Cancel',
						primary: false,
						onClick: (e:MouseEvent) => { this.closePopup() }
					}
				]
			}
		})

			
		
	}

	closePopup = () => {

		this.setState({
			popup: {
				buttons: []
			}
		})

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
				<ComponentPopup {...this.state.popup} />
			</this.KeepContainer>
		)

	}

}

