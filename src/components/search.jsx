import React from 'react'
import '../css/uscars.css'

class Search extends React.Component{
    render(){
        return <div>
            
            <input placeholder="ძიება" type="text" className=" search-width" onChange={this.props.onSearch}/>
        
        </div>
    }
}

export default Search;