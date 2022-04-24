import React, { Component } from 'react'
import AllTasks from './AllTasks';

export default class Tasks extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            AllTasks: [],
            err: '',
            isDone: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        if( this.state.title !== '' && this.state.description !== '') {
            let newTasks = this.state.AllTasks;
            let taskObj = {
                title: this.state.title,
                description: this.state.description,
                isDone: false
            }
            newTasks.push(taskObj)
            this.setState({
                AllTasks: newTasks,
                title: '',
                description: '',
                err: ''
            })
        } else {
            this.setState({
                err: 'Note: All fields are Required!!'
            })
        }
    }
    deleteTask = (taskIndex) => {
        // DELETE/REMOVE THE TASK
        let currentArray = this.state.AllTasks;
        let newArray = [];
        currentArray.forEach( (val, index) => {
            if(taskIndex !== index) {
                newArray.push(val);
            }
        })
        this.setState({
            AllTasks: newArray
        });

        // CROSS OUT/HEIGHLIGHT THE TASK 


        // let currentArray = this.state.AllTasks;
        // let newArray = [];
        // currentArray.forEach( (val, index) => {
        //     if(taskIndex !== index) {
        //         newArray.push(val);
        //     }else {
        //         val.isDone = true
        //         newArray.push(val)
        //     }
        // })
        // this.setState({
        //     AllTasks: newArray
        // });
    }
  render() {
    return (
      <div>
          <div>
              <div id="title-content">
              <input value={this.state.title} name='title' type='text' placeholder='Title' onChange={this.handleChange} />
              </div>
              <input value={this.state.description} name='description' type='text' placeholder='Description' onChange={this.handleChange} />
              
              <div>
                   <button onClick={this.handleClick}>Add New Task</button>
              </div>    
              <h5 id="error">{ this.state.err ? this.state.err : null }</h5>
          </div>
          <div>
              <AllTasks tasks={this.state.AllTasks} deleteTask={this.deleteTask} />
          </div>
      </div>
    )
  }
}
