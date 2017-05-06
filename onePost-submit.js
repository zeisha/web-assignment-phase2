/**
 * Created by Z-Shabani on 5/6/2017.
 */
{

    var request = new XMLHttpRequest();
    postID = localStorage.getItem("postID");

    request.open('GET', "https://ce419.herokuapp.com/blog/post?id="+postID, false);
    request.setRequestHeader("X-Token", localStorage.getItem("token"));

    request.onload = function () {
        alert(postID);
        var data = JSON.parse(request.responseText);
        var title = JSON.stringify(data.post.title);
        title = title.substr(1, title.length - 2);
        var text = JSON.stringify(data.post.text);
        text.toString();
        text = text.substr(1, text.length-2);
        text = text.split('\\r\\n').join('<br>');
        document.getElementById("myTitle").innerHTML = title;
        document.getElementById("myText").innerHTML = text;
    }
    request.send();
}

