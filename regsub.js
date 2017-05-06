/**
 * Created by Z-Shabani on 5/4/2017.
 */
    function submit() {


        var request = new XMLHttpRequest();


        var data = new FormData();
        data.append('student_number', document.getElementById("stdnum").value);
        data.append('password', document.getElementById("password").value);
        data.append('first_name', document.getElementById("firstname").value);
        data.append('last_name', document.getElementById("lastname").value);
        data.append('email', document.getElementById("email").value);

        request.open('POST', 'https://ce419.herokuapp.com/auth/register');

        request.onload = function () {
            var data = JSON.parse(request.responseText);
            if (data.status == 0){
                alert("welcome!");
            }
            if (data.status == -1 ) {
                alert(JSON.stringify(request.responseText));
            }
        }

        request.send(data);
    }


  document.addEventListener('DOMContentLoaded', function () {
  var b = document.querySelector('#myButton');
  b.addEventListener('click', submit);
  })