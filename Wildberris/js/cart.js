const cart = function() {
    const cartBtn = document.querySelector(".button-cart")
    const cart = document.getElementById("modal-cart")
    const closeBtn = document.querySelector(".modal-close")
    const goodsContainer = document.querySelector(".long-goods-list")

    // const addToCart = () => {
        
    // }

    cartBtn.addEventListener("click", function() {
    cart.style.display = "flex"
    })

    closeBtn.addEventListener("click", function() {
        cart.style.display = ""
    })

    if (goodsContainer) {
        goodsContainer.addEventListener('click', (event) => {
            if (event.target.closest('.add-to-cart')) {
                const buttonToCart = event.target.closest('.add-to-cart')
                const goodId = buttonToCart.dataset.id
                const goods = JSON.parse(localStorage.getItem('goods'))
                // const clickedGood = goods.find(good => good.id === goodId)
                // const card = localStorage.getItem('cart') ?
                //     JSON.parse(localStorage.getItem('cart')): []
                console.log(goods);
            }
        })
    }
}
cart()