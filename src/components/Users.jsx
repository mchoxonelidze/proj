import React from 'react'
import User from './User'

class Users extends React.Component{
    render(){
        const {data, onHandleClick} = this.props
        return <div className="container" >
            {
                data && data.map(user=>{
                    return <User key={user.id} user={user}  onUserClick={onHandleClick}/>
                })
            }
        </div>
    }
}

export default Users;