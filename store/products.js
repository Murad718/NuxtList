export const state = () => ({
	products:[],
})

export const mutations = {
	setProducts(state, products){
  	state.products = products;
  },
  setProduct(state, product){
  	state.products.push({
  		name:product.name,
  		description:product.description,
  		price:product.price,
  		image:product.image,
  	});
  	localStorage.setItem('products', JSON.stringify(state.products));
  },
  deleteProduct(state, index){
  	state.products.splice(index,1);
  	localStorage.setItem('products', JSON.stringify(state.products));
  },
}

// export const actions = {
//   async addProduct({commit}, product){
//   	commit('setProduct', product)
//   },
// }

export const getters = {
	products(state){
		return state.products;
	}
}