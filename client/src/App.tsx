import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Project from './pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects/:id',
    element: <Project />
  },
  {
    path: '*',
    element: <NotFound />
  }
  // children: [
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "signup",
  //     element: <SignUp />,
  //   },
  //   {
  //     path: "post/:postId",
  //     element: <PostDetails />,
  //   },
  //   {
  //     path: "category/:catId",
  //     element: <Category />,
  //   },
  //   {
  //     path: 'user',
  //     element: <User />,
  //     children: [
  //       {
  //         path: 'profile/:id',
  //         element: <UserProfile />
  //       },
  //       {
  //         path: 'add-blog',
  //         element: <UserDashboard />
  //       },
  //       {
  //         path: 'update-blog/:blogId',
  //         element: <UpdateBlog />
  //       }
  //     ]
  //   }
  // ]
]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <RouterProvider router={router} />
          {/* <Home /> */}
        </div>
      </ApolloProvider>
    </>
  )
}

export default App
