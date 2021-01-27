<template>
  <div>
    <h1>Panier</h1>
    <div class="flex-col">
      <ul class="cart-list">
        <li
          v-for="item in cartItems"
          :key="item.id"
          class="flex-col cart-list__item"
        >
          <img :src="makeImagePath(item)" class="thumbnail" alt="" />
          <div class="flex-col cart-list__item__details">
            <div>
              <p>{{ item.name }}</p>
            </div>
            <p>chf {{ item.price }} </p>
            <b-button @click="removeFromCart(item.id)" class="btn">
              Supprimer
            </b-button>
          </div>
        </li>
      </ul>
      <section class="total-section">
        <ul class="total-section-list">
          <li class="total-section__item">
            <p class="total-section__item__label">
              {{ cartItemsCount }} produit
            </p>
            <p>{{ itemsSubtotal }}</p>
          </li>
          <li class="total-section__item">
            <p class="total-section__item__label">Mode d'expédition</p>
            <b-select v-model="selectedShippingOption">
              <option disabled value="">Choisissez une option</option>
              <option
                v-for="option in shippingOptionsArray"
                :key="option.text"
                :value="option.rate"
              >
                {{ option.text }} (chf {{ option.rate }})
              </option>
            </b-select>
          </li>
          <li class="total-section__item">
  <p class="total-section__item__label">Total</p>
  <p>{{ total }}</p>
</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
export default {
  name: 'cart',
  mixins: [imagePath],
  data() {
    return {
      selectedShippingOption: '',
      shippingOptionsArray: [
        {
          text: 'lendemain',
          rate: 20,
        },
        {
          text: 'deux jours',
          rate: 15,
        },
        {
          text: 'Trois à cing jours',
          rate: 10,
        },
        {
          text: 'une semaine ou plus',
          rate: 5,
        },
      ],
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    total() {
      if (this.selectedShippingOption) {
        return Number(this.itemsSubtotal) + Number(this.selectedShippingOption);
      }
      return '---';
    },
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId);
    },
  },
};
</script>