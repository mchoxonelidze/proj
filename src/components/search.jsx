import React from 'react'

class Search extends React.Component{
    render(){
        return <div>
            <input type="text" className="form-control" onChange={this.props.onSearch}/>
            <br />
        </div>
    }
}

export default Search;