import React, { Component, MouseEvent } from "react";
import styled from "styled-components";

import ComponentButton from './buttons';

import { Popup } from '../helpers/interfaces';

type Props = Popup

type State = {
    isVisible: boolean
}

export default class ComponentPopup extends Component< Props, State> {

    static defaultProps = {
        title: '',
        content: '',
        buttons: [{
            content: 'Delete',
            primary: true,
            onClick: (e:MouseEvent) => {console.log('Click Delete')}
        },
        {
            content: 'Cancel',
            primary: false,
            onClick: (e:MouseEvent) => {console.log('Click Cancel')}
        }]
    }

    constructor(props:Props){

        super(props);

        this.state = {
            isVisible: false,
        }

    }

    componentDidUpdate(prevProps:Props){

        if(this.props.title !== prevProps.title){

            if(typeof this.props.title !== undefined && this.props.title !== ""){

                this.setState({
                    isVisible: true
                })
                
            }
            else{

                this.setState({
                    isVisible: false
                })

            }

        }

    }

    PopupContainer = styled.div`
        position: fixed;
        z-index: 500000;
        top: 0;
        left: 0;
        width: 100vw;
	    height: 100vh;
        background-color: rgba(44,36,28, 0.5);
    `

    PopupDialog = styled.div`
        padding: 24px;
        width: 100%;
        max-width: 500px;
        background-color: #eff1f7;
        border-radius: 12px;
        margin: auto;
        margin-top: 50vh;
    	transform: translateY(-50%);
    `

    PopupH2 = styled.h2`
        margin: 0 0 1em 0;
        font-size: 1.2em;
        color: #2c241c;
        font-weight: 500;
    `

    PopupP = styled.p`
        margin: 0;
        font-size: 1em;
        color: #2c241c;
        font-weight: 300;
        line-height: 1.4em;
        margin-bottom: 2em;
    `

    PopupButtonsContainer = styled.div`
        text-align: right;
    `
 
    render(){

        if(this.state.isVisible){

            return (
                <this.PopupContainer>
                    <this.PopupDialog>
                        <this.PopupH2>{this.props.title}</this.PopupH2>
                        <this.PopupP>{this.props.content}</this.PopupP>
                        <this.PopupButtonsContainer>
                            {
                                this.props.buttons.map( (button) => {
                                    return ( <ComponentButton {...button} /> )
                                })
                            }
                        </this.PopupButtonsContainer>
                    </this.PopupDialog>
                </this.PopupContainer>
            )

        }
        else {
            return (null);
        }
    }
} 