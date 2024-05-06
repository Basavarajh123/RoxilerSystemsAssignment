import { Component } from "react";


import "./index.css"
let Data
let records

class Home extends Component{

    state={
        transactionData:[],
        currentPage:1,
        firstIndex:0,
        lastIndex:10,
        searchInput:'',
        monthInput:''
    }

    

componentDidMount(){
    this.getTransactionDetails()
}

getTransactionDetails=async()=>{
    const apiUrl='https://project1-63xx.onrender.com/tasks'

    const options={
        method:"GET",

    }

    const response= await fetch(apiUrl,options)
    const  data = await response.json()
    this.setState({
        transactionData:data
    })
}
 prePage=()=>{
    const {currentPage,firstIndex}= this.state
    if(currentPage !== firstIndex){
        this.setState({
            currentPage:currentPage-1
        })
    }
}


nextPage=()=>{
    const {lastIndex,currentPage}= this.state
    if (currentPage !== lastIndex){
        this.setState({
            currentPage:currentPage +1 
        })
    }
}



changePage=(event)=> {
    this.setState({
        currentPage:event.target.value
    })
    
}

onChangeSearch=(event)=>{
    this.setState({
        searchInput:event.target.value
    })
}



onChangeMonth=(event)=>{
    this.setState({
        searchInput:event.target.value
    })
}

    render(){
        const{transactionData,currentPage,searchInput}= this.state
        const recordsPerPage= 10
        const lastIndex=currentPage * recordsPerPage
        const firstIndex= lastIndex- recordsPerPage
       
       
       
        if (searchInput !== undefined){
            records =transactionData.filter((item)=> item.title.toLowerCase().includes(searchInput))
            Data= records.slice(firstIndex,lastIndex)
        }else{
            records= transactionData
            Data= records.slice(firstIndex,lastIndex)
        }
       
        

        return(
            <div className="app-container">
                <div className="dashboard-container">
                    <h1 className="dashboard-container-text">Transaction <br/> Dashboard</h1>
                </div>
                <div className="inputs-container">
                  
                    <input type="search" placeholder="Search transaction" className="search-input-container" onChange={this.onChangeSearch}/>
                    
                   
                    <select className="drop-down-list-container"  onChange={this.onChangeMonth}>
                    <option>Select Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </div>
                <table className="table-container">
                    <thead>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </thead>
                    <tbody>
                        {Data.map( eachTransaction=>
                        <tr>
                            <td>{eachTransaction.id}</td>
                            <td>{eachTransaction.title}</td>
                            <td>{eachTransaction.description}</td>
                            <td>{eachTransaction.price}</td>
                            <td>{eachTransaction.category}</td>
                            <td>{eachTransaction.sold}</td>
                            <td>
                                <img src={eachTransaction.image} alt={eachTransaction.title} className="product-image"/>
                            </td>

                        </tr>)}

                    </tbody>
                </table>
                
                    <ul className="ul-container">
                        <p className="text">Page No: {currentPage}</p>
                        <div className="button-container">
                            <li>
                                <button type="button" onClick={this.prePage} className="button">Prev</button>
                            </li>
                        
                            <li>
                                <button type="button" onClick={this.nextPage} className="button">Next</button>
                            </li>
                        </div>
                       
                        <p className="text">Per Page: 10</p>
                    </ul>
                
            </div>
        )

       
    }
}

export default Home