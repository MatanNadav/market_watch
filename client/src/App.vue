<template>
	<div class="container">
		<div class="title text-center p-3 m-3">Apple Market watch</div>
		<div class="row justify-content-center">
			<div class="col-lg-6">
				<Tabs
					:tabs="tabs"
					:current="state.tabId"
					@change="setTab"
				></Tabs>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<area-chart :data="chartData"></area-chart>
			</div>
		</div>

		<div class="loading" v-if="store.state.loading">
			<div class="row h-100 justify-content-center align-items-center">
				<Spinner></Spinner>
			</div>
		</div>
	</div>
	
</template>

<script>
import Tabs from "./components/Tabs/index.vue";
import Spinner from "./components/Spinner/index.vue";
export default {
	props: {
		store: Object,
	},
	components: {
		Tabs,
		Spinner,
	},
	data() {
		return {
			data: {
				chartData: [],
			},
			state:{
				tabId: '1h',
			},
		};
	},
	computed:{
		tabs(){
			return [{id: '1m', label: '1 minute'},{id: '5m', label: '5 minute'},{id: '1h', label: '1 hour'},{id: '1w', label: '1 week'}]
		},
		chartData() {
			if(this.data.chartData.length === 0) return;
			return this.data.chartData.reduce((data, item, index) => {
				if(index === 0) return data;
				let date = item.Date;
				data[date] = item.Close
				return data;
			}, {})
		}
	},
	methods:{
		setTab(tab){
			if(this.state.tabId === tab.id) return;
			this.state.tabId = tab.id;
			this.prepareRequest(this.prepareRequestOptions(tab));
		},
		prepareRequestOptions(tab){
			const options = {}
			switch(tab.id){
				case '1m':
					options['period'] = '1';
					options['Precision'] = 'Minutes';
					break;
				case '5m':
					options['period'] = '5';
					options['Precision'] = 'Minutes';
					break;
				case '1h':
					options['period'] = '1';
					options['Precision'] = 'Hours';
					break;
				case '1w':
					options['period'] = '24';
					options['Precision'] = 'Hours';
					break;
				default:
					options['period'] = '1';
					options['Precision'] = 'Hours';
			}
			return options;
		},
		prepareRequest(options){
			let request = {...this.store.getRequestOptions, ...options};
			this.executeRequest(request);

		},
		async executeRequest(request){
			const data = await this.store.searchMarket(request);
			this.data.chartData = data;
			this.store.state.loading = false;
		},
	},
	created() {
		this.executeRequest(this.store.getRequestOptions)
	},
};
</script>

<style scoped>
	.title{
		font-size: 18px;
		font-weight: 600;
	}
	.loading{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color:#563d7c;
		opacity: 0.7
	}
</style>
