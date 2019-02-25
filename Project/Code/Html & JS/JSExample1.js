var myPosts = [{
    text: '',
    time: ''
}]

     document.getElementById("butn").addEventListener("click",clicker);
    function clicker() {  
    var postContent = document.getElementById('Mypost');
    var postsContainer = document.getElementById('postContainer');
    postsContainer.innerHTML = '';
     myPosts.push({
            text: postContent.value,
            time: new Date()  
        });
        for (var i = myPosts.length-1;i >= 0; i--){
    var myCard = `<div class="card">
                <div class="card-body">
                   <p> ${myPosts[i].text}</p>
                   <p> ${myPosts[i].time} </p>
                    </div>
                     </div>`;                    
                     var a = postsContainer.innerHTML;
                      postsContainer.innerHTML = a + myCard;
                       
                    }
                     
                    }