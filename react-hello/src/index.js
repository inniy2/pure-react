import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
	<span>Hello</span>
    );
}

function World() {
    return (
	<span>World</span>
    );
}

function HelloWorld() {
    return (
	<div>
	    <Hello/> <World/>!
            <br/>
            <ValidIndicator/>
	    <SubmitButton/>
	</div> 
	//React.createElement(
	    //'div',
	    //{},
	    //'Hello',
	    //'World!'
	//)
    );
    
}


function SubmitButton() {
    var buttonLabel = "Submit";
    return (
	<button>{buttonLabel}</button>
    );
}

function ValidIndicator(){
    var isValid = false;
    return (
	 //<span>
	     //{isValid ? "valid" : "not valid"}
	 //</span>
	<span>
	    { /* here is commend */ }
	    {isValid && 'valid'}
	    {!isValid && 'invalid'}
	    {
		// Double-slash comments are
		// OK in multi-line block
	    }
	</span>
    );
}


ReactDOM.render(
  <HelloWorld/>,
  // [<Hello/>, <World/>],
  document.querySelector('#root'));
