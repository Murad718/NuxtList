<template>
  <form>
  	<label for="name">Наименование товара</label>
  	<input v-model="productFrom.name" placeholder="Введите наименование товара" id="name" type="text">	
  	<label for="description">Описание товара</label>
  	<textarea v-model="productFrom.description" placeholder="Введите описание товара" id="description" type="text"></textarea>	
  	<label for="image">Ссылка на изображение товара</label>
  	<input v-model="productFrom.image" placeholder="Введите ссылку" id="image" type="text">	
  	<label for="price">Цена товара</label>
  	<input v-model="productFrom.price" placeholder="Введите цену" id="price" type="text">	
  	<button v-if="validateForm" style="background: #7BAE73; color:#fff;" @click.prevent="setProduct(productFrom)">Добавить товар</button>
  	<button v-else disabled style="cursor: not-allowed; color:#B4B4B4;" >Добавить товар</button>
  </form>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name:'Form',
  data(){
  	return {
  		productFrom:{
  			name:'',
  			description:'',
  			image:'',
  			price:'',
  		}
  	}
  },
  computed:{
  	validateForm(){
  		for(let field in this.productFrom){
  			if(this.productFrom[field].trim() == ""){
  				return false;
  			}
  		}
  		if(Number.isInteger(this.productFrom.price)){
  			alert('Цена определяется числом')
  			return false
  		}
  		return true;
  	},
  },
  methods:{
  	...mapMutations({
  		setProduct:'products/setProduct',
  	}),
  },
}
</script>

<style scoped lang="scss">
	form{
		display:flex;
		flex-direction:column;
		min-width:332px;
		height:440px;
		position:sticky;
		top: 0;
		padding:24px;
		margin-right:16px;
		background: #FFFEFB;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		border-radius: 4px;
		@media(max-width:768px){
			min-width:100%;
			margin-bottom:20px;
			position:relative;
		}
		label{
			font-family: 'Helvetica';
			font-style: normal;
			font-weight: normal;
			font-size: 11px;
			line-height: 13px;
			margin-bottom:4px;
		}
		input{
			margin-bottom:16px;
			width:100%;
			background: #FFFEFB;
			padding:10px 10px 10px 15px;
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			font-family: 'Helvetica';
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			&:last-child{
				margin-bottom:24px;
			}	
		}
		textarea{
			margin-bottom:16px;
			width:100%;
			height: 108px;
			padding:10px 10px 10px 15px;
			background: #FFFEFB;
			resize: none;
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			font-family: 'Helvetica';
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
		}
		button{
			width:100%;
			background: #EEEEEE;
			border-radius: 10px;
			padding:10px 0px;
			font-family: "Helvetica";
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			letter-spacing: -0.02em;
		}
	}
</style>
