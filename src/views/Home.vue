<template>
<b-container >
  <h2> Produits </h2>
<b-card-group deck>
    <br>
<div v-for="product in products" :key="product.id">
      <b-card
    :title= product.name
    :img-src= imagePath(product.image)
    img-top
    tag= "article"
    style="max-width: 21rem;"
  >
    <b-card-text>
      Description: <br>
      {{product.description}}
    </b-card-text>

    <b-button variant="primary" class="btn btn-sm mr-1 mb-2" ><i ><b-icon icon="cart4"></b-icon></i> Ajouter au panier
      
    </b-button>
    <b-button @click="addToCart(item)" type="button" variant="outline-secondary" class="btn  btn-sm mr-1 mb-2">
      <i ><b-icon icon="exclamation-circle"></b-icon></i>Details
    </b-button>
    <b-button type="button" variant="danger" class="btn btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Ajouter à la liste d'envie">
      <i ><b-icon icon="heart"></b-icon></i>
    </b-button>
  </b-card>
</div>  
</b-card-group>
</b-container>
</template>

<script>
import ProductDataService from "../../services/ProductDataService";
export default {
  name: 'home',
  data(){
    return{
      products: [],
    };
    
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id);
    },
    imagePath(product) {
      return require(`../assets/img/products/${product}`); 
    },
    retrieveProduct(){
      ProductDataService.getAll()
        .then( response => {
          this.products = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveProduct();
  }
};
</script>