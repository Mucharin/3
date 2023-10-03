import React, { Component } from 'react';
import TutorialDataService from '..//services/Student.service.';
import { Link } from '  ';

export default class StudentList extends Component {
  constructor(props){
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveStudent = this.retrieveStudent.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveStudent = this.setActiveStudent.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      tutorial:[],
      currentStudent: null,
      currentIndex: -1,
      searthTitle:""
    }
  }

  componentDidMount(){
    this.retrieveStudent();
  }
  onChangeSearchTitle(e){
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle
    })
  }
  retrieveStudent(){
    StudentsDataService.getAll()
    .then(Response => {
      this.setState({
        Students: Response.data
      });
    })
    .catch(err =>{
      console.log(err);
    });
  }
  refreshList(){
    this.retrieveStudent();
    this.setState({
      currentStudent: null,
      currentIndex: -1
    });
  }
  setActiveStudent(Student, index){
    this.setState({
      currentStudent: Student,
      currentIndex: index
    });

  }
  removeAllStudent(){
    StudentDataService.deleteAll()
    .then(response => {
      this.refreshList();
    })
    .catch(err => {
      console.log(err);
    });
  }
  searchTitle(){
    TutorialDataService.findByTitle(this.state.searthTitle)
    .then(response => {
      this.setState({
        Student: response.data
      })
      })
      .catch(err => {
        console.log(err);
    });
  }

  render() {
    const{searchTitle, Student, currentStudent, currentIndex} = this.state;
    return (
      <div className='list row'>
        <div className='col-md-10'>
          <div className='input-group mb-3'>
            <input
            type="text"
            className="from-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={this.onChangeSearchTitle}
            />
            <div className='input-group-append'>
              <button 
              className='btn btn-outline-secondary'
              type='button'
              onClick={this.searchTitle}
              >search</button>
          </div>
        </div>
       </div>
       <div className='col-md-6'>
        <h4>Student List</h4>

        <ul className='list-group'>
          {Student && Student.map((Student, index) =>(
            <li className={"list-group-item "+(index === currentIndex ? "active": "")} 
            onClick={()=> this.setActiveStudent(Student, index)}
            key={index}>
              {Student.title}
              </li>
          ))}
        </ul>
        <button 
        className='btn btn-sm btn-danger m-3'
        onClick={this.removeAllStudent}
        >
          Remove All
        </button>
       </div>
       <div className='col-md-6'>
        {currentStudent ? (
        <div>
          <h4>Student Detail</h4>
          <div>
            <label>
              <strong>Title :</strong>
            </label>
            {" "}
            {currentStudent.title}
            </div>
            <div>
              <label>
                <strong>Description</strong>
              </label>
              {" "}
              {currentStudent.Description}
        </div>
        <div>
          <label>
            <strong>Status :</strong>
          </label>
          {" "}
          {currentStudent.published ? "Published" : "Pending"}
        </div>
        </div>
        ) : (
        <div>
          <br/>
          <p>Please click on a Student ...</p>
        </div>
        )}
       </div>
     </div>
    )
  }
}
