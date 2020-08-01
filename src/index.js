import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Employee extends React.Component{
  constructor(props){
    super(props);    
    this.state={
      updatedSalary:null
    }
  }
  getUpdatedSalary=(salary)=>{
    this.setState({updatedSalary:salary});
  }

  render(){
    return<div>
        <h1>Employee Details</h1>
  <p><label>Id: <b>{this.props.Id}</b></label></p>
  <p><label>Name: <b>{this.props.Name}</b></label></p>
  <p><label>Location: <b>{this.props.Location}</b></label></p>
  <p><label>Salary: <b>{this.props.Salary}</b></label></p>
  <p><label>Updated Salary : <b>{this.state.updatedSalary}</b></label></p>
  <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}
  onSalaryChanged={this.getUpdatedSalary}
  />
    </div>;
  }
}

class Salary extends React.Component{
constructor(props){
    super(props)
    this.state={
    basic:this.props.BasicSalary,
    hra:this.props.HRA,
    sa:this.props.SpecialAllowance
    };    
}

updateSalary=()=>{
  let salary=parseInt(this.refs.BasicSalary.value)+parseInt(this.refs.HRA.value)+        parseInt(this.refs.SpecialAllowance.value);
  this.props.onSalaryChanged(salary);
}

  render(){
    return <div>
        <h1>Salary Details</h1>
        {/* <p><label>Basic Salary: <b>{this.props.BasicSalary}</b></label></p>        
        <p><label>HRA: <b>{this.props.HRA}</b></label></p>        
        <p><label>SpecialAllowance: <b>{this.props.SpecialAllowance}</b></label></p>         */}
        
          <p><label>Basic Salary :<input type="text" defaultValue={this.state.basic} ref="BasicSalary"/></label>
          </p>
          <p><label>HRA : <input type="text" defaultValue={this.state.hra} ref="HRA"/></label>
          </p>
          <p><label>Special Allowance : <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance"/></label>
          </p>
        <button onClick={this.updateSalary}>Update</button>
      </div>;
    }
}

const element=<Employee Id="21" Name="Shiv" Location="Kalyan" Salary="210000" BasicSalary="21000"
HRA="2100" SpecialAllowance="21"/>

ReactDOM.render(element,document.getElementById('root'));