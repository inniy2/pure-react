import React from 'react';
import ReactDOM from 'react-dom';


function Title(){
    return (
	<div className='title'> The Title </div>
    );
}

function Author(){
    return (
	<div className='author'> The Author </div>
    );
}

function Stats(){
    return (
	<ul className='Stats'>
	    <Rating/>
	    <Isbn/>
	</ul>
    );
}


function Rating(){
    return (
	<li className='Rating'> 5 stars </li>
    );
}


function Isbn(){
    return (
        <li className='isbn'> 12-345678-910-000!!!!! </li>
    );
}

function SingleLine(){
    var _singleLines = "1. Single lines";
    return (
        <span>
            { _singleLines}<br/>
            1. Single lines
            <div>New line <br/>
                test
            </div>
        </span>
    );
}

function  MyThing(){
    return (
	<div className='book'>
	    <Title/><Author/><Stats/><SingleLine/>
	</div>
    );
}


ReactDOM.render(
    <MyThing/>,
    document.getElementById('root')
)
