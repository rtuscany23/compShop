let inventory = [{
    name: 'Monitor',
    sku: '4565',
    price: 289.43,
    pic: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg'
},
{
    name: 'Trackball',
    sku: '8865',
    price: 289.43,
    pic: 'https://media.istockphoto.com/id/171251390/photo/trackball-mouse.jpg?s=1024x1024&w=is&k=20&c=BamhFFxOhHzi0VvlVpddcVtJIH5BgkYnpi4waPosSKQ='
},
{
    name: 'Desktop',
    sku: '5636',
    price: 289.43,
    pic: 'https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=1024x1024&w=is&k=20&c=ja2nAPj3Bum1aJEWI_jYxgdLgXcHQGpcvx5vcgzMcR8='
},
{
    name: 'Printer',
    sku: '4264',
    price: 289.43,
    pic: 'https://media.istockphoto.com/id/960462152/photo/bussiness-man-hand-press-button-on-panel-of-printer-printer-scanner-laser-office-copy-machine.jpg?s=1024x1024&w=is&k=20&c=QCVNGmMQ897U0bdHgYaTGLOl4fr1KDnbtJdG7MrQDwM='
},
{
    name: 'Keyboard',
    sku: '6654',
    price: 289.43,
    pic: 'https://media.istockphoto.com/id/1332153694/photo/laptop-notebook-keyboard-with-colorful-background.jpg?s=1024x1024&w=is&k=20&c=mczDVjLE27oqzS6QrjbJOsXDQ9aEP3fomERJxnqp8iQ='
},
{
    name: 'Notebook',
    sku: '9824',
    price: 289.43,
    pic: 'https://media.istockphoto.com/id/1251629816/photo/the-perfect-setting-to-complete-work.jpg?s=1024x1024&w=is&k=20&c=Cuut4-7KeL8wcCKIIolYt4RHe6ICMZtDSGmPbu5Y5m8='
}
]

let cart = []

function drawMerchWindow() {
    let storeMerchDiv = document.getElementById('merchCard')
    let scriptInsertion = ''
    for (let i = 0; i < inventory.length; i++) {
        scriptInsertion += `
                        <div class="col-4 my-3">
                            <div class="card product-card">
                            <img src="${inventory[i].pic}" alt="${inventory[i].name}">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p><b>${inventory[i].name}</b></p>
                                        <p>$${inventory[i].price}</p>
                                    </div>
                                    <button class="btn btn-outline-secondary" title="Add to Cart"
                                        onclick="addItemToCart(${inventory[i].sku})">
                                        <i class="mdi mdi-cart"></i>
                                        <small>ADD</small>
                                    </button>
                                </div>
                        </div>
                    </div>        
        `
    }
    storeMerchDiv.innerHTML = scriptInsertion
}
drawMerchWindow()

function drawCart() {
    let storeCartCard = document.getElementById('cartCard')
    let scriptInsertion = ''

    cart.forEach(item => {
        scriptInsertion += `<div>${item.name} - ${item.qty} 
    <button 
      onclick="removeItem('${item.sku}')" 
      class="btn btn-danger"> <i class="mdi mdi-delete-forever"></i> </button></div>`
    })

    //let total = calculateCartTotal()

    storeCartCard.innerHTML = scriptInsertion
    //cartTotalElem.innerText = total.toFixed(2)    
}
drawCart()

function addItemToCart(sku) {
    let itemToAdd = inventory.find(obj => obj.sku == sku)
    //console.log(itemToAdd)
    let itemFoundInCart = cart.find(obj => obj.sku == sku)

    if (itemFoundInCart) {
        itemFoundInCart.qty++
    }
    else {
        cart.push({
            name: itemToAdd.name,
            sku: itemToAdd.sku,
            price: itemToAdd.price,
            pic: itemToAdd.pic,
            qty: 1
        })
    }
    drawCart()
    console.log(cart.length)
}



