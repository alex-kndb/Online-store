Vue.component('cart', {
    data() {
        return {
            cartItems: [],
            cartVisibility: false,
            countGoods: 0
        }
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents) {
                    item.imgPath = `img/img-${item.id_product}.jpg`;
                    this.$data.cartItems.push(item);
                }
                this.countGoods = data.countGoods;
            });
    },
    methods: {
        addProduct(item) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++;
                            this.countGoods++;
                        }
                    })
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                            this.countGoods++;
                        }
                    })
            }
        },

        removeProduct(product) {
            if (product.quantity > 1) {
                this.$parent.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            product.quantity--;
                            this.countGoods--;
                        }
                    })
            } else {
                this.$parent.delJson(`/api/cart/${product.id_product}`, product)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                            this.countGoods--;
                        } else {
                            console.log('error');
                        }
                    })
            }
        },
    },


    template: `
                <div class="cart">
                        <button @click="cartVisibility = !cartVisibility" class="cart__btn"><img class="cart__img" src="img/cart.svg" width="32px" alt="cart"></button>
                        <span class="cart__quantity">{{$data.countGoods}}</span>
                        <div class="cart__wrapper" v-show="cartVisibility">
                            <p class="cart__empty" v-show="!cartItems.length">Cart is Empty!</p>
                            <cart-item 
                                v-for="item of cartItems" 
                                :key="item.id_product" 
                                :cart-item="item" 
                                :img="item.imgPath">
                            </cart-item>
                        </div>
                    </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `<div class="cart-item">
                    <a href="#" class="cart-item__link">
                        <img class="cart-item__img" :src="img" alt="cart-item-img">
                    </a>
                    <div class="cart-item__info">
                        <h3 class='cart-item__title'>{{cartItem.product_name}}</h3>
                        <p class='cart-item__price'>$ {{cartItem.price * cartItem.quantity}} <span class="each" v-if="cartItem.quantity > 1">($ {{cartItem.price}}  each)</span></p>
                        <p class="cart-item__quantity">Quantity: {{cartItem.quantity}}</p>
                    </div>
                    <div class="cart-item__btn-wrapper">
                        <button @click="$parent.removeProduct(cartItem)" class="cart-item__btn btn">&times;</button>
                    </div>
                </div>`
});