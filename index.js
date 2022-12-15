import data from './data.js'

let cardContainer = document.getElementById('card-container')
let cardArr;
let show = true
let showAllBlogs = document.getElementById('show-all-blogs')
let showLessBlogs = document.getElementById('show-less-blogs')


cardArr = data.slice(0,6).map(function(item){
    return `<div class="card">
            <img src="${item.img}" class="image"/>
            <p class="card-date">${item.date}</p>
            <h4 class="card-title">${item.title}</h4>
          <p class="card-body">${item.body}</P>
            </div>`
})

cardContainer.innerHTML = cardArr

showAllBlogs.addEventListener('click',function(){
   
    cardArr = data.map(function(item){
        return `<div class="card">
                <img src="${item.img}" class="image"/>
                <p class="card-date">${item.date}</p>
                <h4 class="card-title">${item.title}</h4>
              <p class="card-body">${item.body}</P>
                </div>`
    })
    
    cardContainer.innerHTML = cardArr;
    showAllBlogs.style.display = 'none'
    showLessBlogs.style.display = 'block'
  
})

showLessBlogs.addEventListener('click',function(){
    cardArr = data.slice(0,6).map(function(item){
        return `<div class="card">
                <img src="${item.img}" class="image"/>
                <p class="card-date">${item.date}</p>
                <h4 class="card-title">${item.title}</h4>
              <p class="card-body">${item.body}</P>
                </div>`
    })
    
    cardContainer.innerHTML = cardArr;
    showLessBlogs.style.display = 'none'
    showAllBlogs.style.display = 'block'
    
})
 