import React from 'react'
import usersData from './userscomp'



// let persons = usersData.map(user => <User user={user}/>);
// function save(value, id) {
// let current = persons.findIndex(user => user.id === id);
// persons[current].name = value;
// localStorage.setItem("myKey", JSON.stringify(persons));
// }



class NewCar extends React.Component {
   
    state = {
        id: 0,
        VIN: '',
        stateNum: '',
        owner: '',
        maker: '',
        model: '',
        color: ''
    }

    componentDidMount() {
        if (this.props.authToken) {
          usersData(this.props.authToken);
        }
      }
    

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    saveCar = (event) => {
        event.preventDefault()
        this.props.onSave(this.state)
    }
    // onSubmit = ev => {
    //     ev.preventDefault();
    //     localStorage.setItem("formData", JSON.stringify({Cars}));
    //   };


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.editMode && nextProps.car.id !== prevState.id) {
            return nextProps.car
        }
        return false
    }

    render() {

        return <div>
            <h1 className="text-danger">New car</h1>
            <hr />
            <button className="btn btn-danger" onClick={this.props.goBack}>Go Back</button>
            <hr />
            <form onSubmit={this.saveCar}>

                <div className="form-group">
                <label className="label-width" htmlFor="VIN">VIN</label>
                <input
                    type="text"
                    name="VIN"
                    className="inputstyle"
                    id="VIN"
                    placeholder="Enter VIN"
                    value={this.state.VIN}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="stateNum">სახელმწიფო ნომერი</label>
                <input
                    type="text"
                    name="stateNum"
                    className="inputstyle"
                    id="stateNum"
                    placeholder="სახელმწიფო ნომერი"
                    value={this.state.stateNum}
                    onChange={this.handleInputChange}
                />

            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="owner">მფლობელი</label>
                
          <select value={this.state.value} onChange={this.handleChange}>
           <option></option>
           
          </select>
       
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="maker">მარკა</label>
                <input
                    type="text"
                    name="maker"
                    className="inputstyle"
                    id="maker"
                    placeholder="მარკა"
                    value={this.state.maker}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="model">მოდელი</label>
                <input
                    type="text"
                    name="model"
                    className="inputstyle"
                    id="model"
                    placeholder="მოდელი"
                    value={this.state.model}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="label-width" htmlFor="color">ფერი</label>
                <input
                    type="text"
                    name="color"
                    className="inputstyle"
                    id="color"
                    placeholder="ფერი"
                    value={this.state.color}
                    onChange={this.handleInputChange}
                />
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" onClick={() => this.props.onRemove(this.state.id)} className="btn btn-danger float-right">delete</button>

            </form>
        </div >
    }

}
export default NewCar;