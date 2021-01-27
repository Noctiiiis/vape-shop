<template>
  <b-container fluid="md">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand href="/">VapeShop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown text="E-cigarette">
            <b-dropdown-item href="#">Mod</b-dropdown-item>
            <b-dropdown-item href="#">Meca</b-dropdown-item>
            <b-dropdown-item href="#">POD</b-dropdown-item>
            <b-dropdown-item href="#">Kits</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown text="E-liquide">
            <b-dropdown-item href="#">Fruité</b-dropdown-item>
            <b-dropdown-item href="#">Gourmand</b-dropdown-item>
            <b-dropdown-item href="#">Frais</b-dropdown-item>
            <b-dropdown-item href="#">Sel nicotine</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        
        <b-navbar-nav>
          <b-nav-item-dropdown text="Accessoires">
            <b-dropdown-item href="#">Résistances</b-dropdown-item>
            <b-dropdown-item href="#">Atomiseurs</b-dropdown-item>
            <b-dropdown-item href="#">Reconstructibles</b-dropdown-item>
            <b-dropdown-item href="#">Drip Tips</b-dropdown-item>
          </b-nav-item-dropdown>
          
            
              <b-nav-item>
                <router-link to="/about">
                A propos
            </router-link>
            </b-nav-item>
        </b-navbar-nav>
        <b-nav-form>
          <b-form-input
            disabled
            size="sm"
            class="mr-sm-2"
            placeholder="Recherche"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" disabled
            >Chercher</b-button
          >
        </b-nav-form>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar></b-avatar>
            </template>
            <b-dropdown-item v-if="connected" href="#">Profile</b-dropdown-item>
            <b-dropdown-item v-if="connected" href="#">Déconnexion </b-dropdown-item>
            <b-dropdown-item v-else href="#">Connexion </b-dropdown-item>

            <b-dropdown-item
              ><router-link to="/add"
                >Ajouter un produit</router-link
              ></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="sm-auto">
          <b-nav-item>
            <router-link to="/cart">
              <counter-badge :count="cartCount"> </counter-badge>
              <b-icon icon="cart4"></b-icon>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </b-container>
</template>

<script>
import CounterBadge from "@/components/CounterBadge";
export default {
  name: "app",
  components: { CounterBadge },
  computed: {
    cartCount() {
      return this.$store.state.cart.length;
    },
  },
};
</script>
<style>
@import "./assets/styles/style.scss";
</style>
