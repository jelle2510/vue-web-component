<template>
  <div id="ProductBanner" v-show="!exit" v-if="category_data">
    <hr class="mb10">
    <div class="flexCol">
      <h2 style="text-align: center;" class="smallTitle mb25 row uppercase bold centerTxt">
        Bekijk onze {{ category_data.name }}
      </h2>
    </div>
    <div class="flexRow">
        <a v-for="product of products" :key="product.id" :href="product.product_link">
            <div class="flexCol">
                <img :src="product.img_url" :alt="product.name" class="productimg"/>
                <p>{{ product.name }}</p>
            </div>
        </a>
    </div>
    <hr class="mb10">
  </div>
</template>

<script>
export default {
    name: "CategoryBanner",
    props: ["category"],
    data: () => ({
        exit: false,
        category_data: null,
        products: null
    }),
    created() {
        fetch(
            "http://localhost:8000/api/products/filter", 
            {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({categories: [this.category], count: 5})
            }
            ).then(raw => {
                if (!raw.ok) {
                    return;
                }

                raw.json()
                    .then(json => {
                        this.products = json.data;
                    })
            })
        
        fetch(
            "http://localhost:8000/api/categories/" + this.category
            ).then(raw => {
                if (!raw.ok) {
                    return;
                }

                raw.json()
                    .then(json => {
                        this.category_data = json.data;
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
    max-width: 150px;
    word-wrap: break-word;
}

.productimg {
    max-width: 150px;
    max-height: 100px;
}
</style>
