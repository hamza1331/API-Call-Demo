import React, { Component } from 'react'
import './App.css'
const API_KEY= 'c10bb3bd22f90d636baa008b1529ee25'
export default class App extends Component {
  constructor(props){
      super(props)
      this.state={
        searchText:'',
        searched:false
      }
      this.handleChange = this.handleChange.bind(this)
  }
  getWeather=async(e)=>{
    e.preventDefault()
    const city = this.state.searchText;
    console.log(city)
    if(city){
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}
    ,&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
        searched:true,
        searchText:''
    })
    }
    else
    {
        this.setState({
            error:'Not found!!!'
        })
    }
}
  handleChange(e){
      this.setState({
          searchText:e.target.value
      })
  }
    render() {
    return (
      <div className='container'>
      <form className="card container">
                            <div className="card-body">
                                <br />
                                <div className="input-group">
                                    <input type="search" value={this.state.searchText} onChange={this.handleChange} autoFocus='true' className="form-control" placeholder="Enter City,Country Code (Karachi,PK)" />                                 
                                    <div className="input-group-btn">
                                        <button onClick={this.getWeather} className="btn btn-info"><i className="fa fa-search" aria-hidden="true"></i></button>        
                                    </div>
                                </div>
                            </div>
        </form>
        {this.state.searched && <h2 style={{textAlign:'center',textDecoration:'underline'}}>Check console for Results</h2> }
      </div>
    )
  }
}
