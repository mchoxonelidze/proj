import React from 'react';
import NewCar from './NewCar'
import Search from './search'
import Cars from './Cars'


import '../css/uscars.css';




let carsData = [
    {
        id: 1,
        VIN: 'ragaca',
        stateNum: '5156565',
        owner: '{}',
        maker: 'BMW',
        model: 'raviiiciragaca',
        color: 'red',


    },
    {
        id: 2,
        VIN: 'aa',
        stateNum: '4587665',
        owner: '{}',
        maker: 'BMW',
        model: 'aagaca',
        color: 'blue',
    },
]

class Carscomp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            cars: carsData,
        }
    }

    componentWillMount() {
        localStorage.getItem('user') && this.setState({
            user: JSON.parse(localStorage.getItem('user')),

        })
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState))

    }
    handleClick = (id) => {
        const { cars } = this.state
        const car = [...cars].find(x => x.id === id)
        this.setState({ car, showForm: true, editMode: true })
    }

    handleSearch = (event) => {
        const cars = carsData.filter(x => x.stateNum.includes(event.target.value))
        this.setState({ cars })
    }

    ShowNewForm = () => {
        this.setState({ showForm: true, editMode: false })
    }

    handleSave = (newCar) => {
        if (this.state.editMode) {
            carsData = this.state.cars.map(oldCar => oldCar.id === newCar.id ? newCar : oldCar)
        } else {
            let ids = carsData.map(x => x.id)
            let id = ids.length === 0 ? 1 : Number(ids[ids.length - 1]) + 1
            let item = { ...newCar, id }
            carsData.push(item)
        }
        this.setState({ cars: carsData, showForm: false })
    }

    handleGoBack = () => {
        this.setState({ showForm: false })
    }

    handleRemove = (id) => {

        const index = carsData.findIndex(x => x.id === id)
        carsData.splice(index, 1)
        this.setState({ cars: carsData, showForm: false })

    }

    render() {
        return <div className="container">
            {
                this.state.showForm ?
                    <NewCar
                        onSave={this.handleSave}
                        onRemove={this.handleRemove}
                        goBack={this.handleGoBack}
                        car={this.state.car}
                        editMode={this.state.editMode}
                    /> :
                    <div >
                        <div className="d-flex justify-content-between margin-bott ">
                            <button className="btn btn-outline-primary" onClick={this.ShowNewForm}>New car</button>

                            <Search onSearch={this.handleSearch} />
                        </div>

                        <Cars
                            data={this.state.cars}
                            onHandleClick={this.handleClick}
                        />

                    </div>
            }
        </div>
    }
}

export default Carscomp;