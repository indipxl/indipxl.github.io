function transformUppercase(_val){
    return _val.toUppercase();
}
//DOm event listener
let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})

function checkPassword(){
    let elKataLaluan = document.getElementById("kataLaluan")
    let pass_val = elKataLaluan.value

    if(pass_val.length > 5){
        alert("Password check...OK!")
    }else {
        alert("Password too short!")
    }
}

//traditional DOM event listener
let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword