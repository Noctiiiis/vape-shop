<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by Title"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle"> Chercher </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Produits</v-card-title>

        <v-data-table
          :headers="headers"
          :items="product"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editProduct(item.id)"
              >mdi-pencil</v-icon
            >
            <v-icon small @click="deleteProduct(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="Products.length > 0">
          <v-btn small color="error" @click="removeAllProducts">
            Tout effacer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ProductDataService from "../../services/ProductDataService";
export default {
  name: "products-list",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
        .then((response) => {
          this.product = response.data.map(this.getDisplayProduct);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProducts();
    },

    removeAllProducts() {
      ProductDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      ProductDataService.findByTitle(this.title)
        .then((response) => {
          this.products = response.data.map(this.getDisplayProduct);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editProduct(id) {
      this.$router.push({ name: "product-details", params: { id: id } });
    },

    deleteProduct(id) {
      ProductDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayProduct(product) {
      return {
        id: product.id,
        title:
          product.title.length > 30
            ? product.title.substr(0, 30) + "..."
            : product.title,
        description:
          product.description.length > 30
            ? product.description.substr(0, 30) + "..."
            : product.description,
      };
    },
  },
  mounted() {
    this.retrieveProducts();
  },
};
</script>