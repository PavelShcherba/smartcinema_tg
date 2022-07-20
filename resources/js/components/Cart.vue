<template>
    <div class="CartContainer">
        <div class="Header">
            <h3 class="Heading">Кошик</h3>
            <router-link to="/">
                <h5 class="Action">До Меню</h5>
            </router-link>
        </div>

        <div class="Cart-Items" v-for="cart in carts">
            <div class="image-box">
                <img :src="cart.image" style="height: 120px" />
            </div>
            <div class="about">
                <h1 class="title" v-if="cart.title.slice(0, cart.title.indexOf(' ')) === `Попкорн`">{{
                        cart.title.split(' ').slice(1).toString()
                }}</h1>
                <h1 class="title" v-else>{{ cart.title }}</h1>
                <h3 class="subtitle" v-if="cart.volume">{{ cart.volume }}л</h3>

            </div>
            <div class="counter">
                <div class="btr" @click.prevent="add(cart.product_id, cart.volume, cart.volume_id)">+</div>
                <div class="count">{{ cart.qty }}</div>
                <div class="btr" @click.prevent="remove(cart.product_id, cart.volume, cart.volume_id)">-</div>
            </div>
            <div class="prices">
                <div class="amount">{{ cart.price * cart.qty }} грн</div>

                <div class="remove" @click.prevent="del(cart)"><u>Видалити</u></div>
            </div>
        </div>
        <hr>
        <div class="bsk_select">
            <select @click.stop id="city">
                <option value="hide">-- Місто --</option>
                <option value="cher">Чернівці</option>
                <option value="crop">Кропивницький</option>
                <option value="vinn">Вінниця</option>

            </select>
            <select @click.stop id="hall">
                <option value="hide">-- Виберiть --</option>
                <option value="cash">На кассi</option>
                <option value="1">Зал 1</option>
                <option value="2">Зал 2</option>
                <option value="3">Зал 3</option>
                <option value="4">Зал 4</option>
                <option value="5">Зал 5</option>
                <option value="6">Зал 6</option>
                <option value="7">Зал 7</option>
            </select>

        </div>
        <hr>
        <div class="checkout">
            <div class="total">
                <div>
                    <div class="Subtotal">Сума</div>
                    <div class="items">{{ count }} позиції</div>
                </div>
                <div class="total-amount">{{ total }} грн</div>
            </div>
            <button @click.prevent="productOrder()" class="button_bsk">Сплатити</button>
        </div>
    </div>
</template> 

<script>
import axios from 'axios';
import cryptoJs from 'crypto-js'
export default {
    name: "Cart",
    data() {
        return {
            isCity: true,
            isHall: true,
            carts: null,
            request: null,
        };
    },
    computed: {
        total: function () {
            let total = 0;
            for (let cart in this.carts) {
                total += this.carts[cart].price * this.carts[cart].qty;
            }
            return total;
        },
        count: function () {
            let count = 0;
            for (let cart in this.carts) {
                count += this.carts[cart].qty;
            }
            return count;
        },
        data: function () {
            let data = {
                "public_key": "sandbox_i67714536988",
                "version": "3",
                "action": "pay",
                "amount": this.total,
                "currency": "UAH",
                "description": unescape(encodeURIComponent("Оплата товара")),
                "order_id": this.order_id,
                // "result_url": "http://shop.localhost/api/payment",
                // "server_url": "http://shop.localhost/api/payment"
            };
            data = JSON.stringify(data);
            data = btoa(data);
            return data;
        },
        signature: function () {
            let signature = 'sandbox_MGA3ZOvJylMVCxoknQt5fdAOlYzHLuSbC1Ala9Ar' + this.data + 'sandbox_MGA3ZOvJylMVCxoknQt5fdAOlYzHLuSbC1Ala9Ar';
            signature = cryptoJs.SHA1(signature);
            signature = cryptoJs.enc.Base64.stringify(signature);
            return signature;
        },
        order_id: function () {
            let order_id = Math.floor(Math.random() * 999999999);
            return order_id;
        }
    },
    methods: {
        productOrder() {
            let city = sessionStorage.getItem('city');
            let hall = sessionStorage.getItem('hall');
            if (city && hall && this.total !== 0) {
                axios.post("/api/order", {
                    'cart': JSON.parse(localStorage.getItem('cart'))
                    , 'total': this.total, 'order_id': this.order_id, 'city': city
                    , 'hall': hall
                })
                    .then((res) => {
                        localStorage.removeItem('cart');
                        sessionStorage.removeItem('order_id');
                        sessionStorage.setItem('order_id', this.order_id);
                        window.location.href = `https://www.liqpay.ua/api/3/checkout?data=${this.data}&signature=${this.signature}`;
                    })
                    .catch()
            }
        },

        getCarts() {
            axios.post("/api/cart", JSON.parse(localStorage.getItem('cart')))
                .then(res => {
                    this.carts = res.data.data;
                })
                .catch();


        },
        add(product_id, volume, volume_id) {
            for (let cart in this.carts) {
                if (this.carts[cart].product_id === product_id && this.carts[cart].volume === volume) {
                    this.carts[cart].qty++;
                }
            }
            let cart = localStorage.getItem('cart');
            cart = JSON.parse(cart);
            cart.forEach(productInCart => {
                if (productInCart.product_id === product_id && productInCart.volume_id === volume_id) {
                    productInCart.qty++;
                }
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        },
        remove(product_id, volume, volume_id) {
            for (let cart in this.carts) {
                if (this.carts[cart].product_id === product_id && this.carts[cart].qty > 1 && this.carts[cart].volume === volume) {
                    this.carts[cart].qty--;
                }
            }
            let cart = localStorage.getItem('cart');
            cart = JSON.parse(cart);
            cart.forEach(productInCart => {
                if (productInCart.product_id === product_id && productInCart.volume_id === volume_id && productInCart.qty > 1) {
                    productInCart.qty--;
                }
            });
            localStorage.setItem('cart', JSON.stringify(cart));

        },
        del(cart) {
            let id = this.carts.indexOf(cart);
            this.carts.splice(id, 1);
            let product = []
            if (!this.carts) {
                localStorage.removeItem('cart');
            }
            else {
                for (let c in this.carts) {

                    let newCart = {
                        'product_id': this.carts[c].product_id,
                        'volume_id': this.carts[c].volume_id,
                        'qty': this.carts[c].qty

                    }

                    product.push(newCart);
                }
                localStorage.setItem('cart', JSON.stringify(product));
            }
            console.log(product);



        },

    },
    mounted() {
        this.getCarts();
        sessionStorage.removeItem('hall');
        sessionStorage.removeItem('city');
        $('select').each(function () {
            var $this = $(this), numberOfOptions = $(this).children('option').length;
            $this.addClass('select-hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);

            }

            var $listItems = $list.children('li');

            $styledSelect.click(function (e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function () {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
            });

            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                if ($(this).parent().prev().prev().attr('id') == 'city') {
                    let city = sessionStorage.getItem('city');
                    if (city) {
                        sessionStorage.removeItem('city');
                        sessionStorage.setItem('city', $(this).attr('rel'));
                    }
                    else {
                        sessionStorage.setItem('city', $(this).attr('rel'));
                    }
                }
                if ($(this).parent().prev().prev().attr('id') == 'hall') {
                    let hall = sessionStorage.getItem('hall');
                    if (hall) {
                        sessionStorage.removeItem('hall');
                        sessionStorage.setItem('hall', $(this).attr('rel'));
                    }
                    else {
                        sessionStorage.setItem('hall', $(this).attr('rel'));
                    }

                }
                $this.val($(this).attr('rel'));
                $list.hide();
            });

            $(document).click(function () {
                $styledSelect.removeClass('active');
                $list.hide();
            });

        });
    },

}
</script>
