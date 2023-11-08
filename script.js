// (function(){
//     const pictures = [
//         1,
//         2,
//         3

//     ];
//     const buttons = document.querySelectorAll(".btn");
//     const imgDiv = document.querySelector(".img-container");

//     let counter =0;

//     buttons.forEach(function(button){
//         buttons.addEventListener("click", function (e){
//             if(button.classList.contains("btn-left")){
//                 console.log(this);
//                 counter --;
//                 if(counter < 0){
//                     counter = pictures.length -1;

//                 }
//                 imgDiv.style.background = 'url("images/${pictures[counter]}.JPG")';
//             }
//             if(button.classList.contains("btn-right")){
//                 console.log(this);
//                 counter ++;
//                 if(counter > pictures.length -1){
//                     counter = 0;

//                 }
//                 imgDiv.style.background = "url('images/${pictures[counter]}.JPG')";
//             }
//         });
//     });
// })

(function (){
    const pictures = ["1", "2", "3","4", 5, 6, 7, 8, 9, 10];
    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".block");

    let counter = 0;

    buttons.forEach(function(button){
        button.addEventListener("click", function (e){
            if(button.classList.contains("btn-left")){
                console.log(this);
                counter --;
                if(counter < 0){
                    counter = pictures.length -  1;

                }
                imgDiv.style.background = `url('images/${pictures.at(counter)}.png') center/contain fixed no-repeat`;
            }
            if(button.classList.contains("btn-right")){
                console.log(this);
                counter ++;
                if(counter > pictures.length -1){
                    counter = 0;

                }
                imgDiv.style.background = `url('images/${pictures[counter]}.png') center/contain fixed no-repeat`;
            }
        });
    });
})();

