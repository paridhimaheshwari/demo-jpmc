//import React from 'react'
// this is coming from <link src=text/javascript blah blah.. tag></link> in base.html

const {useState, useEffect} = React;
var csrftoken = readCookie('csrftoken');

const Join = () => {
//export default function join() {
//  name of component need not be exported here and name of component should start with Caps
  return (
    <div>
        <button type="button" className=''><a href="http://127.0.0.1:8000/accounts/register">Join Us</a></button>                                                                                                                                                                                                                                                                                                                                                       
    </div>
  )
}

ReactDOM.render(<Join/>, document.querySelector('#react-join-form'));

// for this component to be visible and working,
// 1. ensure a unique id is used here e.g. react-join-form
// 2. ensure this tag is there on the html page e.g. navbar.html
// 3. ensure that this js is added in the list of scripts e.g. in base.html
