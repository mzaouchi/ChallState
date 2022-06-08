import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks: [
        {title:'Pay internet',id:Math.random(),isdone:true},
        {title:'Play weekend league',id:Math.random(),isdone :true},
        {title:'Visit parents ',id:Math.random(),isdone :true},
        {title:'Props ws',id:Math.random(),isdone :false},
        {title:'Football game',id:Math.random(),isdone :false}
      ],
       assad: ""
    }
  }
  handleAdd=()=> this.setState({tasks : [...this.state.tasks,{title:this.state.assad,id:Math.random(),isdone:false}]})
  handleDelete=(a)=> this.setState({tasks : this.state.tasks.filter((el)=> el.id != a)})
  handleEdit=(a)=> this.setState({tasks : this.state.tasks.map(el=> el.id == a ? {...el,isdone :  !el.isdone} : el )})
  render(){
    return(
      <div>
        <h1>Challenge State</h1>
        {/* <h2>{this.state.tasks[2].title}</h2> */}
        {
          this.state.tasks.map((el,i)=> 
          <div key={el.id}>
            <h2 className={el.isdone && 'done'}>{el.title}</h2> 
            <h2>{el.isdone ? 'TRUE' : 'FALSE'}</h2>
            <button onClick={()=>this.handleDelete(el.id)}>Delete</button> 
            <button onClick={()=>this.handleEdit(el.id)}>{el.isdone ? 'Not Done' : 'Done'}</button>
          </div>    )
        }
        <br/>
        <div>
          <input type='text' onChange={(e)=>this.setState({assad : e.target.value})}/>
          <button onClick={this.handleAdd}>Add</button>
        </div>
      </div>
    )
  }
}

export default App