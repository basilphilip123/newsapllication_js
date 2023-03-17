
function getNews(){
    
  fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=638cd6870fb14895ac1c298d6767a1d1`).
  then(res=>res.json()).then(data=>headlines(data))

}


function headlines(data){
  let news=data.articles;
  let htmlData=``
  news.forEach(function(article){
  let title=article.title;
  let image=article.urlToImage;
  let description=article.description;
  let content=article.content;
  let url=article.url;
  let time=article.publishedAt;
      
  htmlData+=`

  <div class="card mb-3 ms-5 mt-3 bg-primary-subtle" style="margin-left: 700px; width: 600px;">
  <img src="${image}" class="card-img-top mt-2" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
     <p class="card-text">${description}</p>
    <p class="card-text">${time}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a href="${url}" class="btn btn-success">Read more</a>
   
  </div>
</div>



    
  `
  });  
  
  id_news.innerHTML=htmlData;
 


}
function getNewsByCategory(){
  let category=id_category.value;
  
    
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=638cd6870fb14895ac1c298d6767a1d1`).
    then(res=>res.json()).then(data=>headlines(data))

}


function headlines(data){
    let news=data.articles;
    let htmlData=``
    news.forEach(function(article){
    let title=article.title;
    let image=article.urlToImage;
    let description=article.description;
    let content=article.content;
    let url=article.url;
    let time=article.publishedAt;
        
    htmlData+=`

    <div class="card text-bg-secondary display-flux" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title:${title}</h5>
    <hr>
    <p class="card-text">Description:  ${description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Brief Content:  ${content}</li>
    // <li class="list-group-item text-bg-light"></li>
    <li class="list-group-item">Published at:  ${time}</li>
  </ul>
  <div class="card-body text-bg-light">
    <a href="#" class="card-link">Url Link:  ${url}</a>
  </div>
</div>   
    
      
    `
    });  
    console.log(htmlData);
    id_news.innerHTML=htmlData

}