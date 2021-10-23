<template>	
	 <article>
	  <div class="img">
	  	<img :src="dataProduct.image" alt="#">	
	  </div>
	  <div class="content">
	  	<h2>{{dataProduct.name}}</h2>
	  	<p>{{dataProduct.description}}</p>
	  	<span>{{dataProduct.price}} руб.</span>
	  </div>
	  <button @click.prevent="deleteProduct(dataProduct.index)"><i class="far fa-trash-alt"></i></button>
	 </article>  
</template>
	
<script>

import { mapMutations } from 'vuex'	

export default {
  name:'Article',
  props:[
  	'dataProduct',
  ],
  methods:{
  	...mapMutations({
  		deleteProduct:'products/deleteProduct',
  	}),
  },
}
</script>

<style scoped lang="scss">
	article{
		width: 332px;
		display:flex;
		flex-direction:column;
		background: #FFFEFB;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		border-radius: 5px;
		position: relative;
		@media(max-width:768px){
			width:100%;
		}
		&:hover .img>img{
			transform: scale(1.2);
		}
		&:hover button{
			visibility:visible;
			opacity:1;
		}
		.img{
			width:100%;
			height:200px;
			overflow: hidden;
			img{
				object-fit:cover;
				object-position:center;
				width:100%;
				height:100%;
				transition:.3s all;
			}
		}
		.content{
			padding:16px 16px 24px 16px;
			display:flex;
			flex-direction:column;
			h2{
				font-family: 'Helvetica';
				font-style: normal;
				font-weight: 600;
				font-size: 20px;
				color: #3F3F3F;
				margin:16px 0px;
				@media(max-width:1200px){
					font-size:18px;
				}
			}
			p{
				font-family: 'Helvetica';
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 20px;
				color: #3F3F3F;
				margin-bottom:32px;
				@media(max-width:1200px){
					font-size:14px;
				}
			}
			span{
				font-family: 'Helvetica';
				font-style: normal;
				font-weight: 600;
				font-size: 24px;
				color: #3F3F3F;
				@media(max-width:1200px){
					font-size: 22px;	
				}
			}
		}
		button{
			position: absolute;
			right:-10px;
			top:-10px;
			visibility:hidden;
			opacity:0;
			width:32px;
			height:32px;
			transition:.3s all;
			background: #FF8484;
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
			border-radius: 10px;
			color:#fff;
			font-size:16px;
		}
	}
</style>
