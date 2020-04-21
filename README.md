# Readable Project
The final assessment project for Udacity's Redux course.

To get started:
**Backend setup**
* clone backend server **[this repo](https://github.com/udacity/reactnd-project-readable-starter)** with `git clone <link of the repo>`
* change directory to api-server with `cd reactnd-project-readable-starter`
* install backend dependencies with `npm install`
* start the backend server with `node server.js`
**Frontend setup**
* install frontend project dependencies with `npm install`
* start the development server with `npm start`

## [Folder structure]
```bash
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  ├── logo192.png
|  ├── logo512.png
|  ├── manifest.json
|  └── robots.txt
├── README.md
├── src
|  ├── api
|  |  ├── config.ts
|  |  └── index.ts
|  ├── app
|  |  ├── App.test.tsx
|  |  ├── App.tsx
|  |  ├── common
|  |  |  ├── helpers.ts
|  |  |  └── styles.ts
|  |  ├── components
|  |  |  ├── Comment
|  |  |  |  └── Comment.tsx
|  |  |  ├── CommentList
|  |  |  |  └── CommentList.tsx
|  |  |  ├── Controls
|  |  |  |  └── Controls.tsx
|  |  |  ├── EditComment
|  |  |  |  └── EditComment.tsx
|  |  |  ├── Head
|  |  |  |  └── Head.tsx
|  |  |  ├── Layout
|  |  |  |  ├── Layout.tsx
|  |  |  |  └── Navigation
|  |  |  |     ├── Dropdown.tsx
|  |  |  |     └── Navigation.tsx
|  |  |  ├── NewComment
|  |  |  |  └── NewComment.tsx
|  |  |  ├── PostCard
|  |  |  |  └── PostCard.tsx
|  |  |  └── PostList
|  |  |     ├── PostList.tsx
|  |  |     └── types.ts
|  |  └── routes
|  |     ├── EditPost
|  |     |  └── EditPost.tsx
|  |     ├── NewPost
|  |     |  └── NewPost.tsx
|  |     ├── Posts
|  |     |  └── Posts.tsx
|  |     └── PostView
|  |        └── PostView.tsx
|  ├── index.tsx
|  ├── react-app-env.d.ts
|  ├── setupTests.ts
|  └── store
|     ├── categories
|     |  ├── actions.ts
|     |  ├── reducers.ts
|     |  ├── sagas.ts
|     |  └── types.ts
|     ├── comments
|     |  ├── actions.ts
|     |  ├── reducers.ts
|     |  ├── sagas.ts
|     |  └── types.ts
|     ├── index.ts
|     ├── middleware
|     |  └── index.ts
|     ├── posts
|     |  ├── actions.ts
|     |  ├── reducers.ts
|     |  ├── sagas.ts
|     |  └── types.ts
|     ├── reducers
|     |  └── index.ts
|     ├── sagas
|     |  └── index.ts
|     └── types.ts
├── tsconfig.json
└── yarn.lock
```

## How to use
 where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments. 

### Additional features
- Fully coded with TypeScript
- Only functional components used, with React hooks feature, no class components
- Redux Saga is implemented to handle side effects