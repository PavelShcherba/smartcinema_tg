
<template>
	<div class="page4_block">
		<h1 class="order_text">#{{ order_id }}</h1>
		<p class="done">Отримав</p>
	</div>
	<input type="checkbox" id="_checkbox">
	<label for="_checkbox">
		<div @click.prevent="acceptOrder" id="tick_mark"></div>
	</label>
</template>
<script>
import axios from 'axios'



export default {
	name: "AcceptComponents",
	data() {
		return {
			order_id: sessionStorage.getItem('order_id')
		}
	},
	methods: {
        acceptOrder() {
			axios.delete(`api/accept/${this.order_id}`)
			.then((res)=>{
				console.log(res);
				sessionStorage.removeItem('order_id');
				window.location.href = `http://shop.localhost/`;
			})
			.catch()
		}
	},
}
</script>