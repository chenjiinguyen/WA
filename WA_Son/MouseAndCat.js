/**
 * Bài Toán Mèo Bắt Chuột
 * 
 * @param {*} cat_a 
 * @param {*} mouse 
 * @param {*} cat_b 
 */
function who_would_win(cat_a, mouse, cat_b){
    let cat_a_to_mouse = Math.abs(cat_a - mouse)
    let cat_b_to_mouse = Math.abs(cat_b - mouse)

    if(cat_a_to_mouse < cat_b_to_mouse){
        return "Cat A"
    }else if(cat_a_to_mouse > cat_b_to_mouse){
        return "Cat B"
    }else{
        return "The mouse has escaped"
    }
}