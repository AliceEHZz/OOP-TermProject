# Team members: Alice, Brendan, Devynn

Breakdown of Work

**Assigned March 7 (First Sprint)**

Alice Lin:
I work on the following tasks:

1. get/post Login - This task is responsible for user login. To implement this function, I worked in the following files - pushed directly to main branch

   - PassportConfig.ts: configure the passport for local strategy.
   - Authentication.controller.ts: get and post login routes
   - Authentication.service.mocks.ts: findUserByEmail(), getUserByEmailAndPassword(), findUserById()
   - login.ejs

Brendan:
I worked on the following tasks:

1. getAllPosts/ findById - This task is responsible for making the posts from the mockdb show up

   -Post.service.mock.ts 

Devynn:
I worked on the following tasks:

1. <Insert Some Task Here> - This task is responsible for xyz functionality.

**Assigned March 20-24 (2nd Sprint)**

Alice Lin:
I work on the following tasks:

1. like posts - This task is responsible for a logged in user like or unlink other's posts. To implement this function, I worked in the following files - on branches feature/postsLike, feature/ToggleLike have been merged with main.

   - post.controller.ts: get '/:postId/like'
   - Post.Service.mock.ts: modifyLikes() method
   - posts.ejs: toggle like and unlike button icon.

2. search - This task is responsible for returning the search results from user's input in the search bar on the posts.ejs page - on branch feature/search has been merged with main.

   - created search.controller.ts, Search.service.mock.ts, etc.

3. tailwiind css changing - this task is responsible for changing the UI desgin style for devHouse - on branch feature/tailwindCSS has been merged with main.

   - posts.ejs, index.ejs, search.ejs, etc.

4. following - This task is responsible for a logged in user to follow other users from the search result page. - on branch feature/following

Brendan:
I worked on the following tasks:

1. Finished the post service - This task is responsible for allowing the post controller full fuctionality when it is completed.
   
      -Post.service.mock.ts 

Devynn:
I worked on the following tasks:

1. <Insert Some Task Here> - This

**Assigned March 26-April 3 (3nd Sprint)**

Alice Lin:
I work on the following tasks:

1. Setup redis - branch feature/redis, not merged with main
2. setup and config Prisma, and Prisma Client - branch prismaConfig (merged with main)

   - created prisma folder, schema.prisma, prismaClient.ts
   - fix type errors in all files that doesn't match the prisma database

3. merging branches and solve conflicts on main branch. 
   
Brendan:
I worked on the following tasks:

1. Fished the post controller - This task is responsible for giving full post functionality.
   
      -post.controller.ts 
