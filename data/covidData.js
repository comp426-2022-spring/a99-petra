import axios from "axios";


export const getCovidData = async (setCasesInfo, setDeathInfo, setPos, setNeg) => {

    const API_KEY = process.env.NEXT_PUBLIC_COVID_KEY;
    const state = "CA"

    

    const currentUSData = `https://api.covidactnow.org/v2/country/US.json?apiKey=${API_KEY}`;
    // const historicUSData = `https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=${API_KEY}`
    // const dataByState = `https://api.covidactnow.org/v2/state/${state}.json?apiKey=${API_KEY}`
    

    axios.get(currentUSData).then((res) => {
        console.log(res.data)
        const cases = res.data.actuals.cases;
        setCasesInfo(cases)
        // const deaths = res.data.actuals.deaths;
        const deaths = res.data.actuals.deaths;
        setDeathInfo(deaths)

        const pos = res.data.actuals.positiveTests
        setPos(pos);

        const neg = res.data.actuals.negativeTests
        setNeg(neg);

        // console.log("cases: ", cases, " deaths: ", deaths)
        return { data: res.data };
    })
        .catch((e) => {
            console.log(e)
            return { success: false, message: e.message };
        });

        


};