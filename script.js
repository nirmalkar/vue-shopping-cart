new Vue({
    el: "#app",
    data: {
        cart: [],
        wishlist: [],
        product: {
            id: 1,
            name: "Fossil Minimalist Watch",
            price: 160,
            thumbnail:"img/black.jpg",
            colors: [
                {
                    name: "Black",
                    image: "img/black.jpg"
                },
                {
                    name: "Leather",
                    image: "img/leather.jpeg"
                },
                {
                    name: "Blue",
                    image: "img/blue.jpeg"
                }
            ]
        }
    },
    methods: {
        addToCart: function () {
            this.cart.push(this.product.id)
        },
        toggleToWishlist: function () {
            if (this.wishlist.includes(this.product.id)) {
                this.wishlist = this.wishlist.filter(id => id !== this.product.id)
            } else {
                this.wishlist.push(this.product.id)
            }
        },
        changeImage: function(imageUrl){
            this.product.thumbnail=imageUrl
        }
    }
})