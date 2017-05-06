/**
 * Created by Z-Shabani on 5/4/2017.
 */


   function submit () {

    var request = new XMLHttpRequest();

    var data = new FormData();
    data.append('student_number', document.getElementById("stdnum").value);
    data.append('password', document.getElementById("password").value);

    request.open('POST', 'https://ce419.herokuapp.com/auth/login');

    request.onload = function () {
       var data = JSON.parse(request.responseText);
       if(data.status==0){
           localStorage.setItem("token", data.token);
           window.location.href="welcoming.html";
       }
       if (data.status == -1){
           alert(JSON.stringify(request.responseText));
       }
    };
    request.send(data);

    }


    document.addEventListener('DOMContentLoaded', function () {
  var b = document.querySelector('#myButton');
  b.addEventListener('click', submit);
  })


