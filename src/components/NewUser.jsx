import React from 'react'

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

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    saveUser = (event) => {
        event.preventDefault()
        this.props.onSave(this.state)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.editMode && nextProps.user.id !== prevState.id) {
            return nextProps.user
        }
        return false
    }

    render() {

        return <div>
            {/* <h1 className="text-danger">New User</h1>
            <hr /> */}
            <button className="btn btn-danger" onClick={this.props.goBack}>Go Back</button>
            <hr />
            <form onSubmit={this.saveUser}
            >
                <div className="d-flex justify-content-between ">
                <div className="form-group">
                    <label for="user-name">name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="lastName">lastName</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        id="lastName"
                        placeholder="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                </div>
                </div>
                <div className="form-group">
                    <label for="idNum">idNum</label>
                    <input
                        type="number"
                        name="idNum"
                        className="form-control"
                        id="idNum"
                        placeholder="idNum"
                        value={this.state.idNum}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="fname">მამის სახელი</label>
                    <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="მამის სახელი"
                        value={this.state.fname}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="email">email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="date">დაბ.თარიღი</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        id="date"
                        placeholder="დაბადების თარიღი"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" onClick={() => this.props.onRemove(this.state.id)} className="btn btn-danger float-right">delete</button>

            </form>
        </div>
    }
}


export default NewUser;