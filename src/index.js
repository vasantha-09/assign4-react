import React from 'react';
import ReactDom from 'react-dom';
import Comment from './Comment.js';
import './styles.css';
import Button from './Button.js';
function App(){
    return(
        <div>
            <Button>
    <Comment name="Jenny Lawrence" type="New User"/>
    </Button>
    </div>
    )
}
ReactDom.render(
    <div className='box'>
    <App/>
    </div>,
    document.getElementById('root')




    )