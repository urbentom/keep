import React, { Component } from 'react';
import { AxiosResponse } from 'axios';
import './App.css';

import NotePreview from './components/note-preview';
import Request from './helpers/request';
interface Note {
	_id: string,
	title: string,
	content: string
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
				"query": "{ notes { _id title content } }"
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

	render(){

		return (
			<div>

				{
					this.state.notes.map( (note:Note) => {

						return ( <NotePreview title={note.title} content={note.content} /> )

					})	
				}

			</div>
		)

	}

}

