import React from 'react'


// let persons = usersData.map(user => <User user={user}/>);
// function save(value, id) {
// let current = persons.findIndex(user => user.id === id);
// persons[current].name = value;
// localStorage.setItem("myKey", JSON.stringify(persons));
// }

class NewUser extends React.Component {
   
    state = {
        id: 0,
        name: '',
        lastName: '',
        idNum: '',
        fname: '',
        Email: '',
        date: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    saveUser = (event) => {
        event.preventDefault()
        this.props.onSave(this.state)
    }

    // handleFormSubmit = (ev)=>{
    //     const {name, lastName, idNum,fname,Email,date} = this.state
    //     const values = {name, lastName, idNum,fname,Email,date}

    //     ev.preventDefault();
    //     localStorage.setItem("formData", JSON.stringify(values));
    // }
  

    


    static getDerivedStateFromProps(props, state) {
        
        if (props.editMode && props.user.id !== state.id) {
            return props.user
        }
        return false
    }



    render() {

        return <div>
            <h1 className="text-danger">New User</h1>
            <hr />
            <button className="btn btn-danger" onClick={this.props.goBack}>Go Back</button>
            <hr />
            <form onSubmit={this.saveUser}>

                <div className="form-group">
                <label className="label-width" htmlFor="user-name">name</label>
                <input
                    type="text"
                    name="name"
                    className="inputstyle"
                    id="name"
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required= {true}
                />
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="lastName">lastName</label>
                <input
                    type="text"
                    name="lastName"
                    className="inputstyle"
                    id="lastName"
                    placeholder="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    required= {true}
                />

            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="idNum">idNum</label>
                <input
                    type="number"
                    name="idNum"
                    className="inputstyle"
                    id="idNum"
                    placeholder="idNum"
                    value={this.state.idNum}
                    onChange={this.handleInputChange}
                    required= {true}
                />
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="fname">მამის სახელი</label>
                <input
                    type="text"
                    name="fname"
                    className="inputstyle"
                    id="fname"
                    placeholder="მამის სახელი"
                    value={this.state.fname}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="email">email</label>
                <input
                    type="text"
                    name="email"
                    className="inputstyle"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="date">დაბ.თარიღი</label>
                <input
                    type="date"
                    name="date"
                    className="inputstyle"
                    id="date"
                    placeholder="დაბადების თარიღი"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                />
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" onClick={() => this.props.onRemove(this.state.id)} className="btn btn-danger float-right">delete</button>

            </form>
        </div >
    }
}


export default NewUser;