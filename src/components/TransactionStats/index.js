import { Component } from "react";

class TransactionStats extends Component{


    state={
        statsDetails:[],

    
    }

    componentDidMount(){
        this.getStats()
    }



    getStats=async()=>{
        const apiUrl="https://project1-63xx.onrender.com/stats/:month/"
        
    }
    render(){
        return(
            <div>
                <h1>hi</h1>
            </div>
        )
    }
}

export default TransactionStats