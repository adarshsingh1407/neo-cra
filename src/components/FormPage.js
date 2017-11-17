import React, {Component} from 'react'
import Form from './Form'
import {Aux} from './utils/CommonUtil';
import { Link } from 'react-router-dom'

class FormPage extends Component {
  render(){
    return(
      <Aux>
        <Link to={'/'}>Main</Link>
        <br />
        <Form />
      </Aux>
    );
  }
}

export default FormPage
