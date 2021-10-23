<template>
  <main>
    <div>
      <h1>Добавление товара</h1>
      <select v-model="sort"> 
        <option value="default">default</option>
        <option value="min">Min</option>
        <option value="max">Max</option>
      </select>
    </div>
    <div>
      <Form />
      <section>
        <template v-if='products.length > 0'>
          <template v-if="sort == 'default'">
            <Article v-for="product,index of products" :key="index" :dataProduct="{...product, index:index}" /> 
          </template>
          <template v-if="sort == 'min'">
            <Article v-for="product,index of minProducts" :key="index" :dataProduct="{...product, index:index}" /> 
          </template>
          <template v-if="sort == 'max'">
            <Article v-for="product,index of maxProducts" :key="index" :dataProduct="{...product, index:index}" /> 
          </template>
        </template>
        <template v-else>
          <h2 class="none">Товаров не найдено :(</h2>
        </template>
      </section>
    </div> 
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Article from '@/components/Article'
import Form  from '@/components/Form'

export default {
  name:'List',
  components:{
    Form,
    Article,
  },
  data(){
    return{
      sort:'default',
    }
  },
  computed:{
    ...mapGetters({
      products:'products/products',
    }),
    minProducts(){
      let arr = this.products.slice(0);
      return arr.sort((prev, next) => prev.price - next.price);
    },
    maxProducts(){
      let arr = this.products.slice(0);
      return arr.sort((prev, next) => prev.price - next.price).reverse();
    }
  },
  methods:{
    ...mapMutations({
      setProducts:'products/setProducts',
    }),
  },
  mounted(){
    if(localStorage.getItem('products')){
      this.setProducts(JSON.parse(localStorage.getItem('products')));
    }
  }
}
</script>

<style scoped lang="scss">
  main{
    max-width:1440px; 
    display:flex;
    padding:32px;
    margin:0px auto;
    flex-direction: column;
    div{
      display:flex;
      width:100%;
      position:relative;
      &:first-child{
        margin-bottom:16px;
        align-items:center;
        justify-content: space-between;
      }
      &:last-child{
        @media(max-width:768px){
          flex-direction:column;
        }
      }
      h1{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        color: #3F3F3F;
        @media(max-width:768px){
          font-size: 24px;
        }
      }
      select{
        width: 121.49px;
        height: 36px;
        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        color: #B4B4B4;
      }
      section{
        display:flex;
        flex-wrap:wrap;
        gap:16px;
      }
    }
  }
</style>
