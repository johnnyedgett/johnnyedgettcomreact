import posts from './FakePosts'
import React, { Component } from 'react'

class Post extends Component {
  render(){
    const style = {
      'text-align':'right',
      'font-size':'14px'
    }
    const postList = posts.map
      (
        (post)=> 
          <div key={post.title}>
            <h3>{post.title}<div style={style}>{post.date.toDateString()}</div></h3>
            <p>{post.content}</p>
          </div>
      )
    return (
      <div>
        {postList}
      </div>
    )
  }
}

export default Post

// <div class="col-sm-8 box">
//                 <header><h2>About me</h2><span id="date">In case you were wondering...</span></header>
//                 <p id="p1"><br/><h3>Hello World!</h3></p>
//                 <p id="p2">Thanks for stopping by! I don't really know what to put here yet, but I am sure I will think of something in time.
//                     Maybe I'll just make this a personal blog or to-do list? I dunno.
//                     <br/>
//                     <p class="text-center">Click the LinkedIn button above to connect with me!</p>
//                 </p>
//             </div>