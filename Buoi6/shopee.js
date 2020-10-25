let data = [
    {
        hinh: "https://cf.shopee.vn/file/d49ba6a4b90ab14cab6ceb5200ebc709_tn",
        ten: "SP1",
        gia: "100000 VND"

    },
    {
        hinh: "https://cf.shopee.vn/file/d059a53da79565b952682a84ffbcc599_tn",
        ten: "Logitech",
        gia: "200000 VND"

    }
]

let container = document.getElementById("container");

container.innerHTML = ""

for (let i = 0; i < data.length; i++) {
    let sp = data[i];
    let divProduct = document.createElement("div")
    divProduct.className = "product"

    let img = document.createElement("img")
    img.setAttribute("src",data[i].hinh)

    let ten = document.createElement("p")
    ten.innerHTML = data[i].ten

    let gia = document.createElement("p")
    gia.innerHTML = data[i].gia
    
    divProduct.appendChild(img)
    divProduct.appendChild(ten)
    divProduct.appendChild(gia)
    container.appendChild(divProduct)
}
