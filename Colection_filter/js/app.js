const products = [
    // XS / S / M / L / XL
    // white black gray green red    
    {
        name: 'Basic T-shirt',
        color: 'white',
        size: ' XS ',
        price: 50,
    },
    {
        name: 'Basic T-shirt',
        color: 'green',
        size: ' S ',
        price: 50,

    },
    {
        name: 'Cheap T-shirt',
        color: 'gray',
        size: ' L ',
        price: 15,

    },
    {
        name: 'Basic T-shirt',
        color: 'gray',
        size: ' XS ',
        price: 50,
    },
    {
        name: 'Basic T-shirt',
        color: 'gray',
        size: ' S ',
        price: 80,

    },
    {
        name: 'Cheap T-shirt',
        color: 'red',
        size: ' M ',
        price: 10,

    },
    {
        name: 'Basic T-shirt',
        color: 'white',
        size: ' XS ',
        price: 50,
    },
    {
        name: 'Basic T-shirt',
        color: 'green',
        size: ' S ',
        price: 50,

    },
    {
        name: 'Cheap T-shirt',
        color: 'white',
        size: ' M ',
        price: 15,

    },
    {
        name: 'Basic T-shirt',
        color: 'gray',
        size: ' XS ',
        price: 70,
    },
    {
        name: 'Basic T-shirt',
        color: 'black',
        size: ' XL ',
        price: 80,

    },
    {
        name: 'Cheap T-shirt',
        color: 'red',
        size: ' M ',
        price: 20,

    },

];

const filter = (arr, props, value) => {
    let result = [],
        copyArr = [...arr]

    for (const item of copyArr) {
        if (String(item[props]).includes(value) || item['price'] <= value) result.push(item)
    }
    return result

}

function renderApp(arr) {
    const products = document.querySelector('.card-block')
    products.innerHTML = ''

    const nameVal = document.getElementById('search-name').value
    const colorVal = document.getElementById('search-color').value
    const sizeVal = (document.getElementById('search-size').value)
    const priceVal = document.getElementById('search-price').value
    let renderArr = [...arr]
    if (nameVal !== '') renderArr = filter(renderArr, 'name', nameVal)
    if (colorVal !== '') renderArr = filter(renderArr, 'color', colorVal)
    if (sizeVal !== '') renderArr = filter(renderArr, 'size', sizeVal)
    if (priceVal !== 0) renderArr = filter(renderArr, 'price', priceVal)




    for (let prod of renderArr) {
        const product = document.createElement('div')

        const prodName = document.createElement('span')
        const prodColor = document.createElement('span')
        const prodSize = document.createElement('span')
        const prodPrice = document.createElement('span')
        prodName.textContent = `Товар: ${prod.name}`
        prodColor.textContent = ` Цвет: ${prod.color} `
        prodSize.textContent = ` Размер: ${prod.size} `
        prodPrice.textContent = ` Стоимость: ${prod.price} `
        product.append(prodName)
        product.append(prodColor)
        product.append(prodSize)
        product.append(prodPrice)

        product.classList.add('card')
        products.append(product)

    }



}
document.getElementById("search-form").addEventListener('submit', function (e) {
    e.preventDefault();
    renderApp(products)
    console.log('click')

})
renderApp(products)
