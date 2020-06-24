import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Input} from '../Input/Input';


type Task ={
    complete: boolean;
    label: string;
}


/*
     
        --to 
            Arr.map
    component CountItems
        --to count items
            Arr.length
*/


export const App = ()=> {

    return (
        <div className='container'>
            <h1 className='headerTodos'>todos</h1>
            <Input />
        </div>
    )
}

//ReactDOM.render(<App />, document.getElementById('root'));