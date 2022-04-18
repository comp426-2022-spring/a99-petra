import axios from "axios";


export const getCovidData = async () => {

    const API_KEY = process.env.NEXT_PUBLIC_COVID_KEY;
    const state = "CA"

    const currentUSData = `https://api.covidactnow.org/v2/country/US.json?apiKey=${API_KEY}`;
    // const historicUSData = `https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=${API_KEY}`
    // const dataByState = `https://api.covidactnow.org/v2/state/${state}.json?apiKey=${API_KEY}`

    axios.get(currentUSData).then((res) => {
        console.log(res.data)
        // const cases = res.data.actuals.cases;
        // const deaths = res.data.actuals.deaths;


        // console.log("cases: ", cases, " deaths: ", deaths)
        return { data: res.data };
    })
        .catch((e) => {
            console.log(e)
            return { success: false, message: e.message };
        });


};