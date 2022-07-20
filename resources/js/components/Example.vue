<template>
    <div class="conteiner">
        <div class="wrapper" v-for="row in rows">
            <div class="cell_one" v-for="item  in row">
                <div class="info">
                    <img class="pict" :src="item.image" />
                    <p class="main_text">{{ item.title }}</p>
                    <div v-if="item.volumes.length !== 0" class="select" @click="getVolumes">
                        <input class="select__input" type="hidden" name="">
                        <div class="select__head">Виберiть</div>
                        <ul class="select__list" style="display: none">
                            <li v-for="volume in item.volumes"
                                @click.stop="setVolume(item.id, volume.id, volume.price[0].value, $event)"
                                class="select__item">{{ volume.value }}</li>
                        </ul>
                    </div>
                    <p v-if="item.prices.length !== 1" class="secondary_text">Цена: {{ item.prices[0].value }} грн.</p>
                    <p v-else class="secondary_text">Цена: {{ item.prices[0].value }} грн</p>
                </div>
                <div class="button">
                    <button @click.prevent="addToCart(item)" class="btn btn-secondary">
                        <a href="">Добавить к заказу</a>
                    </button>
                </div>
            </div>
        </div>
        <br />
        <div class="to_basket">
            <section class="elipson" style="display: none">

                <router-link class="btc btc-primary" to="/cart">
                    До Кошику
                </router-link>

            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Example",
    data() {
        return {
            persons: null,
            cart: [],
            product_cart: null,

        };
    },

    computed: {
        rows: function () {
            var row = [];
            var rows = [];
            var products = this.persons;
            for (var r in products) {
                row.push(products[r]);
                if (row.length === 3) {
                    rows.push(row);
                    row = [];
                }
            }
            if (row.length > 0) {
                rows.push(row);
            }
            return rows;
        }
    },
    mounted() {
        this.getElipson();
        this.getProducts();

        $(document).click(function (e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
    },
    methods: {
        getElipson() {

            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
                if (cart.length !== 0) {
                    $('.elipson').fadeIn();

                }
                else {
                    $('.elipson').fadeOut();
                }
            }
            else {
                    $('.elipson').fadeOut();
                }
        },
        getProducts() {
            axios.get("/api")
                .then(res => {
                    this.persons = res.data.data;
                });
        },
        getVolumes(e) {
            if ($(e.target).hasClass('open')) {
                $(e.target).removeClass('open');
                $(e.target).next().fadeOut();
            }
            else {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
                $(e.target).addClass('open');
                $(e.target).next().fadeIn();
            }
        },
        setVolume(product_id, volume, price, event) {
            this.product_cart = null;
            $('.select__head').removeClass('open');
            $(event.target).parent().fadeOut();
            $(event.target).parent().prev().text($(event.target).text());
            $(event.target).parent().parent().next().html("Цена: " + price + " грн.");
            let product = {
                'product_id': product_id,
                'volume_id': volume,
            };
            this.product_cart = product;

        },
        addToCart(product) {
            let newCart = [{
                'product_id': product.id,
                'volume_id': null,
                'qty': 1
            }];
            let cart = localStorage.getItem('cart');
            if (this.product_cart && product.volumes.length !== 0 && newCart[0].product_id === this.product_cart.product_id) {
                newCart[0].volume_id = this.product_cart.volume_id;
            }
            else if (product.volumes.length !== 0) {
                newCart[0].volume_id = product.volumes[0].id;
            }
            if (!cart) {
                localStorage.setItem('cart', JSON.stringify(newCart));
            }
            else {
                cart = JSON.parse(cart);
                cart.forEach(productInCart => {
                    if (productInCart.product_id === product.id && productInCart.volume_id === newCart[0].volume_id) {
                        productInCart.qty++;
                        newCart = null;
                    }
                });
                Array.prototype.push.apply(cart, newCart);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            $('.elipson').fadeIn();


        }
    },
}
</script>
