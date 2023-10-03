import React, { Component } from 'react';
import StudentDataService from '../services/Student.service.';

export default class AddStudent extends Component {
  constructor(props){  //ทำทันที
    super(props);  // ส่งให้คลาสแม่

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newStudent = this.newStudent.bind(this);

    this.state = {
      Code: null,
      Name: "",
      Lastname: "",
      univ: "",
      Graduation: false
    }
  }

  onChangeCode(e) {
    this.setState({
      Name: e.target.value
    });
  }

  onChangeLasname(e) {
    this.setState({
      Lastname: e.target.value
    });
  }

  saveStudent() {
    var data = {
      Name: this.state.Name,
      Lastname: this.state.Lastname
    };

    StudentDataService.create(data)
      .then( response => {
        this.setState({
          Code: response.data.Code,
          Name: response.data.title,
          Lastname: response.data.Lastname,
          Univ: response.data.Univ,
          Graduation: true
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  newStudent(){
    this.setState({
      Code: null,
      Name: "",
      Lastname: "",
      Univ: "",
      Graduation: false
    });
  }

  render() {
    return (
      <div className='submit-form'>
        {this.state.submitted ? (
          <>
            <h4>You submitted successfully</h4>
            <button className='btn btn-success' onClick={this.newStudent}>Add</button>
          </>
        ) : (
          <>
            <div className='form-group'>
              <label htmlFor='Name'>Name:</label>
              <input type='text' 
                className='form-control' 
                Code='Name' value={this.state.Name}
                onChange={this.onChangeName}
                name='Name'
                required />
            </div>
            <div className='form-group'>
              <label htmlFor='Lastname'>Lastname</label>
              <input type='text' 
                className='form-control' 
                Code='Lastname' value={this.state.Lastname}
                onChange={this.onChangeDescription}
                name='Lastname'
                required />
            </div>

            <button onClick={this.saveStudent} 
              className='btn btn-success'>
                Submit
            </button>
          </>
        )}
      </div>
    )
  }
}
