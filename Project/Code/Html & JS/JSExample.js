//var a = document.getElementById("value1");
//a.type = "checkbox";
//a.disabled = true;
//a.readOnly = true;
/* var a = document.getElementById("container");
var label = document.createElement("label");
label.id ="FirstName";
label.innerHTML ="Welcome";
a.appendChild(label); */
function createPost()
{
    var postContent = document.getElementById('Mypost');
    var postsContainer = document.getElementById('postContainer');
    postContent.innerHTML= '';
     var myPosts = {
            text: postContent.value,
            time: new Date()  
        };
        //for (var i = myPosts.length-1;i >= 0; i--){
    var myCard = `<div class="card">
                <div class="card-body">
                   <p> ${myPosts.text}</p>
                   <p> ${myPosts.time} </p>
                  <p></p>
                    </div>
                     </div>`;                    
                     var a = postsContainer.innerHTML;
                      postsContainer.innerHTML =  myCard + a;
          //             }

}