<template>
	<div class="tabs-component text-center">
		<div class="tab-label"
			:class="{
				'current': current === tab.id
			}"
			v-for="(tab, index) in tabs"
			:key="index + 'tab'"
			@click="$emit('change', tab)"
		>
			{{tab.label}}
		</div>
	</div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: Array,
	current: String,
  }
}
</script>

<style scoped>
	.tabs-component {
		margin: 0px -10px 0px
	}
	.tabs-component .tab-label {
        display: inline;
        margin: 0px 10px;
        padding: 2px 2px;
        font-size: 18px;
        color: #7f8c8d;
        border-bottom: 1px transparent solid;
        cursor: pointer;
        transition: all .5s ease;
    }
    .tabs-component .tab-label.faded {
        opacity: 0.7;
    }
    .tabs-component .tab-label:hover {
        opacity: 1;
    }
    .tabs-component .tab-label.current {
        border-bottom: 1px #7f8c8d solid;
        opacity: 1;
    }
    .tabs-component .tab-label.updated {
        color: #d88a35;
    }
    .tabs-component .tab-label.updated.current {
        border-color: #d88a35;
    }
    .tabs-component .tab-label.error {
        color: #c10000;
    }
</style>
