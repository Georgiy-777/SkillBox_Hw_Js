const products = [
    {
        name: 'Basic T-shirt',
        color: 'white',
        size: ' XS',
        price: 50,
    },
    {
        name: 'Basic T-shirt',
        color: 'green',
        size: 'S',
        price: 50,

    },
    {
        name: 'Cheap T-shirt',
        color: 'gray',
        size: 'L ',
        price: 15,

    },
    {
        name: 'Basic T-shirt',
        color: 'gray',
        size: 'XS',
        price: 50,
    },
    {
        name: 'Basic T-shirt',
        color: 'gray',
        size: 'S',
        price: 80,

    },
    {
        name: 'Cheap T-shirt',
        color: 'red',
        size: 'M',
        price: 10,

    },
    {
        name: 'Basic T-shirt',
        color: 'white',
        size: 'XS',
        price: 50,
    },
    {
        name: 'Basic T-shirt',
        color: 'green',
        size: 'S ',
        price: 50,

    },
    {
        name: 'Cheap T-shirt',
        color: 'white',
        size: 'M',
        price: 15,

    },
    {
        name: 'Basic T-shirt',
        color: 'gray',
        size: ' XS',
        price: 70,
    },
    {
        name: 'Basic T-shirt',
        color: 'black',
        size: ' XL',
        price: 80,

    },
    {
        name: 'Cheap T-shirt',
        color: 'red',
        size: ' M',
        price: 20,

    },

];

const cardBlock = document.querySelector('.card-block')
const filter = (arr, props, value) => {
    let result = [],
        copyArr = [...arr]

    for (const item of copyArr) {

        if ((String(item[props]).trim().includes(value) && String(item[props]).trim().indexOf(value) == 0) || item['price'] <= value) result.push(item)
    }
    return result
    //
}
const sortedByPrice = (arr, prop, dir) => {
    let prices = arr.sort((a, b) => {

        if (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) return -1

    })
    return prices

}

const renderFuction = (arr) => {
    cardBlock.innerHTML = ''
    arr.forEach((item) => {
        const card = document.createElement('div')
        card.classList.add('card')
        cardBlock.append(card)
        card.innerHTML += `
            <div>Товар: ${item.name}</div>
            <div>Цвет: ${item.color}</div>
            <div>Размер: ${item.size}</div>
            <div>Стоимость: ${item.price}</div> `
    })
}

renderFuction(products)


document.getElementById("search-form").addEventListener('submit', function (e) {
    e.preventDefault();
    const nameVal = document.getElementById('search-name').value
    const colorVal = document.getElementById('search-color').value
    const sizeVal = (document.getElementById('search-size').value)
    const priceVal = document.getElementById('search-price').value
    let renderArr = [...products]
    if (nameVal !== '') renderArr = filter(renderArr, 'name', nameVal)
    if (colorVal !== '') renderArr = filter(renderArr, 'color', colorVal)
    if (sizeVal !== '') renderArr = filter(renderArr, 'size', sizeVal.toUpperCase())
    if (priceVal !== 0) renderArr = filter(renderArr, 'price', priceVal)
    renderFuction(renderArr)


})


document.querySelector(".sort-btn__priceup").addEventListener('click', function (e) {
    const sortPriceArr = sortedByPrice(products, 'price', false)
    renderFuction(sortPriceArr)
})

document.querySelector(".sort-btn__pricedown").addEventListener('click', function (e) {
    const sortPriceArr = sortedByPrice(products, 'price', true)
    renderFuction(sortPriceArr)
})



