import React from 'react';
import NewUser from './NewUser'
import Search from './search'
import Users from './Users';

import '../css/uscars.css';




let usersData = [
    {
        id: 1,
        name: 'mariam',
        lastName: 'chokhonelidze',
        idNum: '012523615',
        fname: 'ნოდარი',
        email: 'mariamchokhonelidze@gmail.com',
        date: '25/03/1999'

    },
    {
        id: 2,
        name: 'giorgi',
        lastName: 'jokhadze',
        idNum: '54562215',
        fname: 'ლევანი',
        email: 'giorgijokhadze@gmail.com',
        date: '17/07/1996'
    },
]

class Userscomp extends React.Component {

    state = {
        users: usersData,
        showContactForm: false,
        user: {},
        editMode: false
    }

    handleClick = (id) => {
        const { users } = this.state
        const user = [...users].find(x => x.id === id)
        this.setState({ user, showContactForm: true, editMode: true })
    }

    handleSearch = (event) => {
        const users = usersData.filter(x => x.idNum.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState({ users })
    }

    newFormShow = () => {
        this.setState({ showContactForm: true, editMode: false })
    }

    handleSave = (newUser) => {
        if (this.state.editMode) {
            usersData = this.state.users.map(oldUser => oldUser.id === newUser.id ? newUser : oldUser)
        } else {
            let ids = usersData.map(x => x.id)
            let id = ids.length === 0 ? 1 : Number(ids[ids.length - 1]) + 1
            let item = { ...newUser, id }
            usersData.push(item)
        }
        this.setState({ users: usersData, showContactForm: false })
    }

    handleGoBack = () => {
        this.setState({ showContactForm: false })
    }

    handleRemove = (id) =>{
        if(("Remove this user?")){
            const index = usersData.findIndex(x=>x.id===id)
            usersData.splice(index, 1)
            this.setState({users:usersData, showContactForm:false})
        }
    }

    render() {
        return <div className="container">
            {
                this.state.showContactForm ?
                    <NewUser
                        onSave={this.handleSave}
                        onRemove={this.handleRemove}
                        goBack={this.handleGoBack}
                        user={this.state.user}
                        editMode={this.state.editMode}
                    /> :
                    <div >
                        <div className="d-flex justify-content-between ">
                            <button className="btn btn-outline-primary" onClick={this.newFormShow}>New user</button>

                            <Search  onSearch={this.handleSearch} />
                        </div>
                        
                            <Users
                                data={this.state.users}
                                onHandleClick={this.handleClick}
                            />
                        
                    </div>
            }
        </div>
    }
}

export default Userscomp;