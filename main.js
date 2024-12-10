var button = document.querySelector("#theme")

button.onclick = function () {
    let body = document.querySelector('body');

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }

    // console.log(!document.querySelector("body").style.backgroundColor);
    // if(document.querySelector("body").style.backgroundColor == "rgb(255, 255, 255)"){
    //     document.querySelector("body").style.backgroundColor = "rgb(0, 0, 0)";
    // }
    // else{
    //     document.querySelector("body").style.backgroundColor ='rgb(255, 255, 255)';
    // }
}