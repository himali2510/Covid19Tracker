import React from 'react';
//npm install --save axios react-chartjs-2 chart.js react-countup classnames @material-ui/core
import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchdata } from './api';
import coronaImage from './img/503974.jpg';
class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const FetchedData = await fetchdata();
        this.setState({ data: FetchedData });
    }
    handleCountryChange =async (country)=>{
        const FetchedData = await fetchdata(country);
        this.setState({ data: FetchedData,country:country });
    }
    render() {
        const { data ,country} = this.state;
        return (
            <div className={styles.container}>
                <img src={coronaImage}className={styles.Image} alt='Cobid-19'/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country} />
            </div>
        )
    }
}
export default App;