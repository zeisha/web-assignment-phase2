/**
 * Created by Z-Shabani on 5/6/2017.
 */
{
    var request = new XMLHttpRequest();
    postID = localStorage.getItem("postID");

    request.open('GET', "https://ce419.herokuapp.com/blog/comments?post_id="+postID, false);
    request.setRequestHeader("X-Token", localStorage.getItem("token"));

    request.onload = function () {
        var data = JSON.parse(request.responseText);

        comments = data.comments;

        var str = 1 ;
        str += ". ";
        for (i = 0 ; i< comments.length -1 ; i++){
            str += JSON.stringify(comments[i].text);
            str+="<br>"
            str += (i+2);
            str += ". ";
        }
        str += JSON.stringify(comments[comments.length-1].text);

        document.getElementById("myText").innerHTML = str;


    }
    request.send();


}