import Vue from 'vue';
import searchMarket from "../services/search";

const initStore = () => {
    const store = new Vue({
        data: {
            data: {
                requestOptions:{
                    'Identifier': 'AAPL.XNAS',
                    'IdentifierType' : 'Symbol',
                    'AdjustmentMethod' : 'All',
                    'IncludeExtended' : 'False',
                    'period' : '1',
                    'Precision' : 'Hours',
                    'StartTime' : '8/28/2020%2016:0',
                    'EndTime' : '9/4/2020%2023:59',
                    '_fields' : 'ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume'
                }
            },
            state: {
                loading: null,
            },
        },
        computed: {
            getRequestOptions(){
                return this.data.requestOptions;
            },
        },
        methods: {
            async searchMarket(options){
                this.state.loading = true;
                return await searchMarket(options ? options : this.data.requestOptions) 
            },
        },
    });
    return store;
}

export default initStore;