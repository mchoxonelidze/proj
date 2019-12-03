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
        fname: '',
        email: 'mariamchokhonelidze@gmail.com',
        date: '25/03/1999'

    },
    {
        id: 2,
        name: 'giorgi',
        lastName: 'jokhadze',
        idNum: '54562215',
        fname: 'goga',
        email: 'giorgijokhadze@gmail.com',
        date: '17/07/1996'
    },
]

class Userscomp extends React.Component {

    state = {
        users: usersData,
    }
    

    handleClick = (id) => {
        const { users } = this.state
        const user = [...users].find(x => x.id === id)
        this.setState({ user, showForm: true, editMode: true })
    }

    handleSearch = (event) => {
        const users = usersData.filter(x => x.idNum.includes(event.target.value))
        this.setState({ users })
    }

    ShowNewForm = () => {
        this.setState({ showForm: true, editMode: false })
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
        this.setState({ users: usersData, showForm: false, })
    }

  

    // componentDidMount(){
    //     JSON.parse(localStorage.getItem('user'));
    // }

    // componentWillUpdate(nextProps, nextState){
    //     localStorage.setItem('user', JSON.stringify(nextState))
    // }

   


    handleGoBack = () => {
        this.setState({ showForm: false })
    }

    handleRemove = (id) => {
        const index = usersData.findIndex(x => x.id === id)
        usersData.splice(index, 1)
        this.setState({ users: usersData, showForm: false })

    }

    render() {
        return <div className="container">
            {
                this.state.showForm ?
                    <NewUser
                        onSave={this.handleSave}
                        onRemove={this.handleRemove}
                        goBack={this.handleGoBack}
                        user={this.state.user}
                        editMode={this.state.editMode}
                    /> :
                    <div >
                        <div className="d-flex justify-content-between margin-bott ">
                            <button className="btn btn-outline-primary" onClick={this.ShowNewForm}>New user</button>

                            <Search onSearch={this.handleSearch} />
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