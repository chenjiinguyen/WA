
/// Object Tên
// Năm Sinh - ns
// Địa chỉ - dc
// Trường Đang Học - th

// Cách 1
// let Duy = {
//     ns : 2000,
//     dc : "Sài Gòn",
//     th : "MindX",
// }

// Cách 2
// let Duy = {}
// Duy.ns = 2000
// Duy.dc = "Sài Gòn"
// Duy.th = "MindX"



function introduce(){
    let obj = {}
    ten = prompt("Họ và tên")
    obj.ten = ten
    
    return obj
}


let obj =  introduce()
console.log("Tôi Tên là " + obj.ten)
console.log("Tôi Sinh Năm " + obj.ns)
console.log("Tôi Đang Ở " + obj.dc)
console.log("Tôi Đang Học Ở " + obj.th)