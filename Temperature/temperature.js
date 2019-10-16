import React from 'react';
import TemperatureInput from './temperatureInput';

class Temperature extends React.Component{


    constructor(props){
        super(props);
        this.state={
            scale : 'C',
            temperature: ''
        }
    }

    handleChange = (event, scale) =>{
        this.setState({...this.state, scale, temperature: event.target.value});
    }

    convert = (scale) =>{
        const tempNumber = parseFloat(this.state.temperature);
        if(Number.isNaN(tempNumber)){ return; }

        let convertNumber = tempNumber;
        if(scale === 'C' && this.state.scale==='F'){
             convertNumber = this.toCelsius(tempNumber);
        }
        if(scale === 'F' && this.state.scale==='C'){
             convertNumber = this.toFahrenheit(tempNumber);
        }
        const rounded = Math.round(convertNumber * 1000) / 1000;
        return rounded;

    }


    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }
      
    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    render(){

        return(
            <div>
                <h3>Temperlature Calculater</h3>
                <TemperatureInput scale='C' handleChange={this.handleChange} temperature={this.convert('C')}/>
                <TemperatureInput scale='F' handleChange={this.handleChange} temperature={this.convert('F')}/>
            </div>
        )
    }


}

export default Temperature;