<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Ajouter un produit</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="product.name"
          :rules="[(v) => !!v || 'Le nom est requis']"
          label="Nom"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.brand"
          :rules="[(v) => !!v || 'Le champ est obligatoire']"
          label="Marque"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.price"
          :rules="[(v) => !!v || 'Le champ est obligatoire']"
          label="Prix"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.category"
          :rules="[(v) => !!v || 'Le champ est obligatoire']"
          label="Categorie"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.description"
          :rules="[(v) => !!v || 'Le champ est obligatoire']"
          label="Description"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.image"
          :rules="[(v) => !!v || 'Le champ est obligatoire']"
          label="Url de l'image"
          required
        ></v-text-field>
      </v-form>

      <b-button variant="primary" class="mt-3" @click="saveproduct">Envoyer</b-button>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title> Envoie avec succès! </v-card-title>

        <v-card-subtitle> Cliquer pour ajouter un produit. </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newproduct">>Ajouter</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../../services/ProductDataService.js";

export default {
  name: "add-product",
  data() {
    return {
      product: {
        id: null,
        name: "",
        brand: "",
        price: "",
        category: "",
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveproduct() {
      var data = {
        name: this.product.name,
        brand: this.product.brand,
        price: this.product.property,
        category: this.product.category,
        description: this.product.description,
      };

      ProductDataService.create(data)
        .then((response) => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newproduct() {
      this.submitted = false;
      this.product = {};
    },
  },
};
</script>