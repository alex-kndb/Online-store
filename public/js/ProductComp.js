Vue.component('products', {
    data() {
        return {
            filtered: [],
            products: [],
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    item.imgPath = `img/img-${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
                <section class="features container">
                    <h2 class="features__title">Features Items</h2>
                    <p class="features__subtitle">Shop for items based on we featured in this week</p>

                    <div class="features__card-box card-box">
                        <card 
                            v-for="item of filtered" 
                            :key="item.id_product" 
                            :product="item" 
                            :img="item.imgPath">
                        </card>
                    </div>

                    <div class="btn-box">
                        <a href="#" class="features__btn">Browse All Products<i class="fas fa-long-arrow-alt-right btn-features__arrow"></i></a>
                    </div>
                </section>`
});

Vue.component('card', {
    props: ['product', 'img'],
    template: `
                <div class="card">
                    <a href="#" class="card__link">
                        <div class="card__img-box">
                            <img class="card__img" :src="img" alt="card_img">
                        </div>
                        <p class="card__title">{{ product.product_name }}</p>
                        <p class="card__text">Known for her sculptural takes on traditional tailoring, Australian
                            arbiter of
                            cool Kym Ellery teams up with Moda Operandi.</p>
                        <p class="card__price">$ {{ product.price }}</p>
                    </a>
                    <div class="card__add">
                        <div class="add__link upper-link" @click="$root.$refs.cart.addProduct(product)"><img class="add__img" src="img/add-to-cart.png">Add to Cart</div>
                    </div>
                </div>`
});
