import { Component } from 'react'
import Car from './car'

class App extends Component {
    state = {  // object
        cars: [
            {
                name: "Mazda 4",
                year: 2020,
                color:'rgb(0,0,0)'
            },
            {
                name: "Ford",
                year: 2015,
                color:'rgb(0,0,0)'
            },
            {
                name: "Ferari",
                year: 2022,
                color:'rgb(0,0,0)'
            },
        ],
        title: 'React components',
        showCars: false
    }

    changeTitleHandler = (e) => {
        this.setState({
            title: 'Changed!'
        })
    }

    toggleCarsHandler = (e) => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    inputChangeHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    changeTitleCarsHandler = (name) => {
        this.setState({
            title: name
        })
    }

    carTitleHandler = (value, idx) => {
        let cars = [...this.state.cars]
        cars[idx].name = value

        this.setState({
            cars
        })
    }

    rgbHandler =(idx)=> {
        let cars = this.state.cars
        const random=()=>Math.floor(Math.random()*256)
        const color=`rgb(${random()},${random()},${random()})`
        cars[idx].color=color
        this.setState({
            cars
        })

    }


    deleteHandler = (idx)=> {
        let cars = this.state.cars;
        cars.splice(idx,1);
         
        this.setState({ 
            cars
        })
    }

    render() {
        const appStyle = {
            textAlign: 'center',
        }

        let div = null

        if (this.state.showCars) {
            div = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        idx={index}
                        name={car.name}
                        year={car.year}
                        color={car.color}
                        ondelete={()=>{this.deleteHandler(index)}}
                        onrgbClick={()=>{this.rgbHandler(index)}}
                        onCarClick={this.carTitleHandler}
                        onChange={
                            () => { this.changeTitleCarsHandler(car.name) }
                        }
                    />
                )
            })
        }

        return (
            <div className="App" style={appStyle} >
                <h1 >
                    {this.state.title}
                </h1>
                <input type="text" onChange={this.inputChangeHandler} />
                <br />
                <button onClick={this.toggleCarsHandler}>Click</button>
                <br />
                {div}
            </div>
        )
    }
}

export default App