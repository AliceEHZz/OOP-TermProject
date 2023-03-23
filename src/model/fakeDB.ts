import IDatabase from "../interfaces/database.interface.ts";

// Please feel free to not use this, or completely change it to your liking. It is just an example.
const database: IDatabase = {
  users: [
    {
      id: "1",
      email: "gates@gmail.com",
      password: "gates123",
      firstName: "Bill",
      lastName: "Gates",
      username: "billgates",
      role: "user",
      posts: [
        {
          postId: 1,
          userId: "billgates",
          message: "Microsoft is a nice company",
          createdAt: new Date(),
          likes: 3,
          comments: 1,
          commentList: [
            {
              postId: 1,
              createdAt: "2012-01-09T11:25:13Z",
              userId: "billgates",
              message: "this is some random comment",
            },
          ],
        },
      ],
      following: ["2", "3"],
    },
    {
      id: "2",
      username: "james123",
      email: "james123@gmail.com",
      password: "james123",
      firstName: "James",
      lastName: "Smith",
      role: "user",
      posts: [
        {
          postId: 2,
          userId: "james123",
          message: "A post by james",
          createdAt: new Date(),
          likes: 30,
          comments: 12,
          commentList: [
            {
              postId: 2,
              createdAt: "2012-01-05T04:13:24Z",
              userId: "billgates",
              message: "Cool post james. Glad I decided to follow you.",
            },
          ],
        },
        {
          postId: 3,
          userId: "james123",
          message: "Nice weather today in Vancouver",
          createdAt: new Date(),
          likes: 30,
          comments: 12,
          commentList: [
            {
              postId: 3,
              userId: "billgates",
              createdAt: "2012-02-05T05:13:24Z",
              message: "The weather is always nice when you're rich like me.",
            },
          ],
        },
      ],
      following: ["1", "3"],
    },
    {
      id: "3",
      firstName: "Armaan",
      lastName: "Armaan",
      email: "ad123@gmail.com",
      password: "ad123123!",
      role: "admin",
      posts: [],
      following: [],
    },
    {
      id: "4",
      firstName: "John",
      lastName: "Armaan",
      email: "jo123@gmail.com",
      password: "jo123",
      role: "user",
      posts: [],
      following: ["1"],
    },
  ],
};

// -------- Note: I only created these as a simple test example for you, delete them later and use above db or your own --------------
const userDatabase = [
  {
    id: "1",
    firstName: "Bill",
    lastName: "Gates",
    email: "gates@gmail.com",
    password: "gates123",
    role: "user",
    following: ["2", "3"],
  },
  {
    id: "2",
    firstName: "James",
    lastName: "Smith",
    email: "james123@gmail.com",
    password: "james123",
    role: "user",
    following: ["1", "3"],
  },
  {
    id: "3",
    firstName: "Armaan",
    lastName: "Armaan",
    email: "ad123@gmail.com",
    password: "ad123123!",
    role: "admin",
    following: [],
  },
  {
    id: "4",
    firstName: "John",
    lastName: "Armaan",
    email: "jo123@gmail.com",
    password: "jo123",
    role: "user",
    following: ["1"],
  },
];

const post = {
  postId: 4,
  userId: "john Kelly",
  message: "Hi there",
  createdAt: new Date(),
  likes: 2,
  comments: 1,
  commentList: [
    {
      postId: 4,
      createdAt: "2012-01-09T11:25:13Z",
      userId: "billgates",
      message: "cool post for post 4",
    },
  ],
  likesList: ["james123@gmail.com", "ad123@gmail.com"],
};

const posts = [
  {
    postId: 4,
    userId: "john Kelly",
    message: "Hi there",
    createdAt: new Date(),
    likes: 2,
    comments: 1,
    commentList: [
      {
        postId: 4,
        createdAt: "2012-01-09T11:25:13Z",
        userId: "billgates",
        message: "cool post for post 4",
      },
    ],
    likesList: ["james123@gmail.com", "ad123@gmail.com"],
  },
  {
    postId: 5,
    userId: "john Chan",
    message: "this is a new post by me",
    createdAt: new Date(),
    likes: 1,
    comments: 1,
    commentList: [
      {
        postId: 5,
        createdAt: "2012-01-09T11:25:13Z",
        userId: "billgates",
        message: "cool post for post 5",
      },
    ],
    likesList: ["gates@gmail.com"],
  },
];

export { userDatabase, database, post, posts };
