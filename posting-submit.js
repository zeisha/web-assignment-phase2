/**
 * Created by Z-Shabani on 5/5/2017.
 */


  function submit() {

    var request = new XMLHttpRequest();

    var data = new FormData();
    data.append('title', document.getElementById("myTitle").value);
    data.append('summary', document.getElementById("mySummary").value);
    data.append('text', document.getElementById("myText").value);



    request.open('POST', 'https://ce419.herokuapp.com/blog/post');
    request.setRequestHeader("X-Token", localStorage.getItem("token"));


    request.onload = function () {
       var data = JSON.parse(request.responseText);
       if(data.status==0){
           alert("your post has benn sent");
           alert(data.post_id);
           localStorage.setItem("postID", data.post_id);
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
