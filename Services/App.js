import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddStudents from '../Components/add-Student'
import Student from './components/Student';
import StudentsList from './components/Student-list';
import StudentsList from '../Components/Student-list';

class App extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <Link to="/Student" className='navbar-brand'>
            NBU
          </Link>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to="/Student" className='nav-link'>
                บทเรียน
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/add" className='nav-link'>
                เพิ่ม
              </Link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<StudentList />} />
            <Route path='/StudentList' element={<StudentList />} />
            <Route path='/add' element={<AddStudent />} />
            <Route path='/Student/:id' element={<Student />} />
          </Routes>
        </div>
      </>
    )
  }
}

export default App;