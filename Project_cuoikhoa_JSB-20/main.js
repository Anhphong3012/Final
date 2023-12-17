document.getElementById("signInButton").addEventListener("click", login);
const demoUserName = "admin"
const demoPassWord = "admin"
const demoEmail = "leanhphong.sc@gmail.com"
function login(){
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;
    const Email = document.getElementById("Email").value;

    if (username === demoUserName && password === demoPassWord && Email === demoEmail) {
        alert("Sign in successfull")
    } else {
        alert("Sign in false")
    }
}

document.getElementsByClassName("body_right_buy_button")[0].addEventListener("click", addToCart)
function addToCart(){
    alert("Add to Cart successful")
    alert("Click buy button to pay!")
}

document.getElementsByClassName("button_last")[0].addEventListener("click", Paywithmoney)
function Paywithmoney(){
    alert("Pay successful")
    alert("Bank account : -💵 1.987,39 $ USD")
}

document.getElementsByClassName("something_dont_need_TK")[0].addEventListener("click", showMoney)
function showMoney(){
    document.getElementsByClassName("money_test")[0].style.display = "flex"
}

document.getElementsByClassName("money_test")[0].addEventListener("click", plusMoney)
function plusMoney(){
    alert(" ??? successful")
    alert("Bank account : + 💵99999999999999999999 $ USD")
}

document.getElementsByClassName("more_button")[0].addEventListener("click", moreButton)
function moreButton(){
    alert("We don't have that now!")
}

document.getElementsByClassName("more_button_2")[0].addEventListener("click", moreButton)
function moreButton(){
    alert("We don't have that now!")
}

document.getElementsByClassName("more_button_3")[0].addEventListener("click", moreButton)
function moreButton(){
    alert("We don't have that now!")
}

document.getElementsByClassName("something_dont_need_TK_2")[0].addEventListener("click", giftCard)
function giftCard(){
    document.getElementsByClassName("mrBeast")[0].style.display = "flex"
}

document.getElementsByClassName("mrBeast")[0].addEventListener("click", plusGift)
function plusGift(){
    alert(" Gift ?????? successful")
    alert("message from MrBeast☑️: You win 1.000.000 $$$ pls come to ohio, US!")
}