
function login() {
    const username = document.getElementsByClassName("name")[0].value;
    const password = document.getElementsByClassName("pass")[0].value;
    if (username === demoUserName && password === demoPassWord) {
        alert ("tạo tài khoản hoàn tất")
    } else {
        alert ("tạo tài khoản lỗi")
    }
}
console.log("there")
const demoUserName ="MyGame43"
const demoPassWord ="MyGame43Rip_Indra"
document.getElementsByClassName("signInButton")[0].addEventListener ("click", login)