import React from 'react'
import Car from './Car'

class Cars extends React.Component{
    render(){
        const {data, onHandleClick} = this.props
        return <div className="container" >
            {
                data && data.map(car=>{
                    return <Car key={car.id} car={car}  onCarClick={onHandleClick}/>
                })
            }
        </div>
    }
}

export default Cars;