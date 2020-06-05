import axios from 'axios';
const url = `https://covid19.mathdro.id/api`;

export const fetchdata = async (Country) => {
    let changeableUrl=url;
    if(Country){
        changeableUrl=`${url}/countries/${Country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error) {
        return error;
    }
}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        // console.log(data);
        const modifiedData = data.map((dailyData) => ({
               confirmed:dailyData.confirmed.total,
               deaths:dailyData.deaths.total,
               date:dailyData.reportDate
        }))
        return modifiedData;
    }
    catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        const { data:{countries} } = await axios.get(`${url}/countries`)
        // console.log(data);
        const modifiedData = countries.map((country) => country.name);
        return modifiedData;
    }
    catch (error) {
        return error;
    }
}
