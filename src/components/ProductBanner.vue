<template>
  <div id="ProductBanner" v-show="!exit" v-if="product_data">
    <hr class="mb10">
    <div class="flexCol">
      <h2 style="text-align: center;" class="smallTitle mb25 row uppercase bold centerTxt">
          {{ product_data.name }}
      </h2>
      <div class="flexRow">
        <div v-if="product_data.shops[0]" class="flexCol">
          <img :src="product_data.shops[0].logo_url" :alt="product_data.shops[0].name" class="shopimg" />
          <p>€ {{ product_data.shops[0].price }}</p>
        </div>
        <div class="flexCol">
          <img :src="product_data.images[0].img_url" :alt="product_data.name" class="productimg" />
        </div>
        <div v-if="product_data.shops[1]" class="flexCol">
          <img :src="product_data.shops[1].logo_url" :alt="product_data.shops[1].name" class="shopimg" />
          <p>€ {{ product_data.shops[1].price }}</p>
        </div>
      </div>
    </div>
    
    <hr class="mb10">
  </div>
</template>

<script>
export default {
  name: "ProductBanner",
  props: ["product"],
  data: () => ({
    exit: false,
    product_data: null
  }),
  created() {
    fetch("http://localhost:8000/api/products/" + this.product)
      .then(raw => {
        if (!raw.ok) {
          return;
        }

        raw
          .json()
          .then(json => {
            this.product_data = json.data;
          })
      })
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

div {
    font-family: 'Lato', sans-serif;
    margin-left: auto;
    margin-right: auto;

    margin: 10px;
    text-align: center;
    word-wrap: break-word;
}

.flexCol {
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
}

.flexRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}

.productimg {
  object-fit: cover;
  max-width: 400px;
  max-height: 250px;
}

.shopimg {
    object-fit: cover;
    max-width: 150px;
    max-height: 100px;
}
</style>
