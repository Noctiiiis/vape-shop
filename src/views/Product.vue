<template>
  <b-container fluid="md">
    <div v-for="product in products" :key="product._id" class="m-2">
      <h2>Produits</h2>
      <b-card
        title= {{ product.name}}
        img-src= imagePath(product)
        img-alt=""
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ product.description }}
        </b-card-text>

        <b-button href="#">Ajouter au panier</b-button>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js";
import ProductDataService from "../../services/ProductDataService";
export default {
  name: 'product',
  mixins: [imagePath],
  data(){
    return{
      products:[]
    };
  },
  /*computed: {
    products: function() {
      return this.$store.state.products
    }
  },*/
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id);
    },
    retrieveProduct(){
      ProductDataService.getAll()
        .then(response => {
          this.products = response.data;
          console.log(response.data);
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
