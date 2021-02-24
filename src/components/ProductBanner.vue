<template>
  <div id="ProductBanner" v-show="!exit" v-if="product_data">
    <hr class="mb10">
    <div class="flexCol">
      <h2 style="text-align: center;" class="smallTitle mb25 row uppercase bold centerTxt">
          {{ product_data.name }}
      </h2>
      <br>
      <p style="text-align: center;" class="row mb15">
          Verkrijgbaar bij
      </p>
    </div>
    <div class="flexRow">
        <a v-for="shop of product_data.shops" :key="shop.id" :href="shop.shop_link">
            <div>
                <img :src="shop.logo_url" :alt="shop.name" class="shopimg"/>
                <p>{{ shop.name }}</p>
                <p>€ {{ shop.price }}</p>
            </div>
        </a>
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
#ProductBanner {
    margin-left: auto;
    margin-right: auto;
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

#ProductBanner>div>a {
    margin: 10px;
}

#ProductBanner>div>a>div>p {
    text-align: center;
}

.shopimg {
    max-width: 150px;
    max-height: 100px;
}
</style>
