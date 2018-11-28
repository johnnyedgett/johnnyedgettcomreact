var posts = [
  {
    "title":"This is my first post!",
    "date": new Date(),
    "content":"Hello World! This is the react version of my webpage. Believe it or not - it's not WordPress! :)"
  },
  {
    "title":"This is another post!!",
    "date": new Date(),
    "content":"I don't know how this will look.. time to find out!"
  },
  {
    "title":"This is a third post!!",
    "date": new Date(),
    "content":"In theory, these posts will eventually be loaded from my database. "
  },
  {
    "title":"Hey look to the left!",
    "date": new Date(),
    "content":"That's me!"
  },
  {
    "title":"Still see me?",
    "date": new Date(),
    "content":"You should, because I am using 'Sticky' by Yahoo. You can get it here: https://github.com/yahoo/react-stickynode" 
  }
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sem sit amet nisi lacinia convallis. Donec ut pharetra diam. Proin id justo dolor. Suspendisse facilisis ultricies felis. Integer et lobortis lectus. Suspendisse gravida enim vel arcu tempor elementum. Maecenas lorem metus, fringilla ut turpis eu, feugiat feugiat justo. Ut tincidunt enim in arcu viverra interdum porttitor sit amet metus. Sed nulla enim, vulputate sed dignissim vitae, varius finibus dolor. Phasellus cursus ex purus, et venenatis sem condimentum in. Duis pharetra ut ante in dignissim. Morbi sagittis velit lorem, id hendrerit nibh iaculis nec. Morbi sed iaculis lacus. Suspendisse tincidunt cursus tincidunt. Phasellus nec felis quis tortor tempus eleifend.!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sem sit amet nisi lacinia convallis. Donec ut pharetra diam. Proin id justo dolor. Suspendisse facilisis ultricies felis. Integer et lobortis lectus. Suspendisse gravida enim vel arcu tempor elementum. Maecenas lorem metus, fringilla ut turpis eu, feugiat feugiat justo. Ut tincidunt enim in arcu viverra interdum porttitor sit amet metus. Sed nulla enim, vulputate sed dignissim vitae, varius finibus dolor. Phasellus cursus ex purus, et venenatis sem condimentum in. Duis pharetra ut ante in dignissim. Morbi sagittis velit lorem, id hendrerit nibh iaculis nec. Morbi sed iaculis lacus. Suspendisse tincidunt cursus tincidunt. Phasellus nec felis quis tortor tempus eleifend.!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sem sit amet nisi lacinia convallis. Donec ut pharetra diam. Proin id justo dolor. Suspendisse facilisis ultricies felis. Integer et lobortis lectus. Suspendisse gravida enim vel arcu tempor elementum. Maecenas lorem metus, fringilla ut turpis eu, feugiat feugiat justo. Ut tincidunt enim in arcu viverra interdum porttitor sit amet metus. Sed nulla enim, vulputate sed dignissim vitae, varius finibus dolor. Phasellus cursus ex purus, et venenatis sem condimentum in. Duis pharetra ut ante in dignissim. Morbi sagittis velit lorem, id hendrerit nibh iaculis nec. Morbi sed iaculis lacus. Suspendisse tincidunt cursus tincidunt. Phasellus nec felis quis tortor tempus eleifend.!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sem sit amet nisi lacinia convallis. Donec ut pharetra diam. Proin id justo dolor. Suspendisse facilisis ultricies felis. Integer et lobortis lectus. Suspendisse gravida enim vel arcu tempor elementum. Maecenas lorem metus, fringilla ut turpis eu, feugiat feugiat justo. Ut tincidunt enim in arcu viverra interdum porttitor sit amet metus. Sed nulla enim, vulputate sed dignissim vitae, varius finibus dolor. Phasellus cursus ex purus, et venenatis sem condimentum in. Duis pharetra ut ante in dignissim. Morbi sagittis velit lorem, id hendrerit nibh iaculis nec. Morbi sed iaculis lacus. Suspendisse tincidunt cursus tincidunt. Phasellus nec felis quis tortor tempus eleifend.!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sem sit amet nisi lacinia convallis. Donec ut pharetra diam. Proin id justo dolor. Suspendisse facilisis ultricies felis. Integer et lobortis lectus. Suspendisse gravida enim vel arcu tempor elementum. Maecenas lorem metus, fringilla ut turpis eu, feugiat feugiat justo. Ut tincidunt enim in arcu viverra interdum porttitor sit amet metus. Sed nulla enim, vulputate sed dignissim vitae, varius finibus dolor. Phasellus cursus ex purus, et venenatis sem condimentum in. Duis pharetra ut ante in dignissim. Morbi sagittis velit lorem, id hendrerit nibh iaculis nec. Morbi sed iaculis lacus. Suspendisse tincidunt cursus tincidunt. Phasellus nec felis quis tortor tempus eleifend.!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sem sit amet nisi lacinia convallis. Donec ut pharetra diam. Proin id justo dolor. Suspendisse facilisis ultricies felis. Integer et lobortis lectus. Suspendisse gravida enim vel arcu tempor elementum. Maecenas lorem metus, fringilla ut turpis eu, feugiat feugiat justo. Ut tincidunt enim in arcu viverra interdum porttitor sit amet metus. Sed nulla enim, vulputate sed dignissim vitae, varius finibus dolor. Phasellus cursus ex purus, et venenatis sem condimentum in. Duis pharetra ut ante in dignissim. Morbi sagittis velit lorem, id hendrerit nibh iaculis nec. Morbi sed iaculis lacus. Suspendisse tincidunt cursus tincidunt. Phasellus nec felis quis tortor tempus eleifend.!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  // {
  //   "title":"This is my second post!",
  //   "date": new Date(),
  //   "content":"Hey this is my second post!"
  // },
  
]

export default posts