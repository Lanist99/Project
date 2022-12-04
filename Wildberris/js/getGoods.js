const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')    
// draw the received data
    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list')
       
        goodsContainer.innerHTML = ''

        goods.forEach(good => {
           const goodBlock =document.createElement('div')

           

           goodBlock.classList.add('col-lg-3')
           goodBlock.classList.add('col-sm-6')

           goodBlock.innerHTML = ` 
					<div class="goods-card">
						<span class="label ${good.label ? null :  'd-none'}">${good.label}</span>
		                <img src="db/${good.img}" alt="${good.name}" class="goods-image">				
						<h3 class="goods-title">${good.name}</h3>
						<p class="goods-description">${good.description}</p>
						<button class="button goods-card-btn add-to-cart" data-id="007">
							<span class="button-price">$${good.price}</span>
						</button>
					</div>
           `
          goodsContainer.append(goodBlock)

        //   console.log(good)
        })
    }

    const getData = (value, category) => {
        fetch('db/db.json')
            .then((res) => res.json()) 
            .then((data) => {
                const array = category ? data.filter((item) =>  item[category] ===value) : data

                localStorage.setItem('goods',JSON.stringify(array))
                
                if (window.location.pathname !== 'goods.html') {
                    window.location.href = 'goods.html'
                } else {
                    renderGoods(array)
                }
                // window.location.href = 'goods.html'
                // console.log(window.location)
            })
    }
    
    links.forEach((link) => {
       link.addEventListener('click', (event) => {
            event.preventDefault()
            const linkValue = link.textContent
            // console.log(linkValue)
            const category = link.dataset.field
            getData(linkValue, category)

       })
    })

    if (localStorage.getItem('goods')) {
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }
}

getGoods()

