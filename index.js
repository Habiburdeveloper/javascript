
// function getName(){
//     var username = document.getElementById("name").value;
//     var password = document.getElementById("password").value;
//     // set value......
//     document.getElementById("set_name").value = username;
//     document.getElementById("set_password").value = password;
    
// //     if( username == "habib" && password == "12345" ) {
// //         alert("ok");
// //     }
// //     else{
// //         alert("sorry");
// //     }
// }

// // var firstname = "habibur";
// // var lastname = "Rahman";
// // console.log("Name: " + firstname +" "+ lastname);
// // let product_price = 100;
// // let product_qty = 2;
// // let product_name = "ligth";
// // let payment = 4;
// // let total_price = product_price*product_qty;
// // let per_payment = total_price / payment;

// // console.log(product_name + " " + per_payment + "tk");

// // let name = Array("habib","hamim","habibur");
// // console.log(name[0]);

// //  java object....
// // const name = {
// //     name: "habib",
// //     name_1: "hamim",
// //     name_3: "habibur"
// // }

// // let object = name.name_3; // object declear....
// // console.log(object);

// // const person_info = {
// //     first_name: 'Habibur',
// //     last_name: 'Rahman',
// //     phone_number: '0130000',
// //     village: 'Moniary',

// //     fullName: function () {
// //         return "full Name: " + this.first_name + " " + this.last_name;
// //     }

// // }
 
// // let object_method = person_info.fullName(); // method declear.... 
// // alert(object_method);

// // var habib = document.getElementsByClassName("username");
// // habib[0].style.backgroundColor="red";

// // var tagname = document.getElementsByTagName("label");
// // tagname[0].style.color='red';
// // tagname[1].style.color='red';
// // document.querySelector("h1").style.backgroundColor= "red";

// function result() {
//     var result_show =document.getElementById("result").value;

//     if ( result_show >=33 && result_show <=39 ) {
//             document.getElementById("set").innerHTML= "D";
//     }
//     else if ( result_show >= 40 && result_show <= 49 ) {
//             document.getElementById("set").innerHTML= "c";
//     }
//     else if ( result_show >= 50 && result_show <= 59 ) {
//         document.getElementById("set").innerHTML= "b";
//     }
//     else if ( result_show >= 60 && result_show <= 69 ) {
//         document.getElementById("set").innerHTML= "a-";
//     }
//     else if ( result_show >= 70 && result_show <= 79 ) {
//         document.getElementById("set").innerHTML= "a";
//     }
//     else if ( result_show >= 80 && result_show <= 89 ) {
//         document.getElementById("set").innerHTML= "a+";
//     }
//     else if ( result_show >= 90 && result_show <= 100 ) {
//         document.getElementById("set").innerHTML= "golden a+";
//     }
//     else{
//         document.getElementById("set").innerHTML= "Fale";
//     }
// }



    // code start
    function validation() {
        var username = document.getElementById('username');
            usermail = document.getElementById('email');

            if ( username.value.trim() == '') {
                document.getElementById('user_error').innerHTML = 'invalid username';
                return false;
            }
            else if ( username.value.length <= 4 ) {
                document.getElementById('user_error').innerHTML = 'username minimum 4 carecter up';
                return false;
            }
            else{
                document.getElementById('user_error').innerHTML = '';
            }



            if ( usermail.value == '' ) {
                document.getElementById('email_error').innerHTML = 'invalid usermail';
                return false;
            }
            else{
                document.getElementById('email_error').innerHTML = '';
            }

    }


    






