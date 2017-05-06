/**
 * Created by Z-Shabani on 5/6/2017.
 */

function submit() {
    var request = new XMLHttpRequest();

    var data = new FormData();
    data.append('post_id', document.getElementById("myPostId").value);
    data.append('text', document.getElementById("myComment").value);

    request.open('POST', 'https://ce419.herokuapp.com/blog/comment');
    request.setRequestHeader("X-Token", localStorage.getItem("token"));


    request.onload = function () {
       var data = JSON.parse(request.responseText);
       if(data.status==0){
           alert("your comment has been sent");
       }
       if (data.status == -1){
           alert(JSON.stringify(request.responseText));
       }
    }
    request.send(data);
}


document.addEventListener('DOMContentLoaded', function () {
  var b = document.querySelector('#myButton');
  b.addEventListener('click', submit);
  })