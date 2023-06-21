//- I AM NOT DONE

type User = {
  id: number;
  username: string;
  email: str;
  firstName: string;
  lastName: string;
  posts: Array<Number>;
  isLoggedIn: Bool;
};

// DO NOT CHANGE THE CODE BELOW
const user: User = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe',
  posts: [1, 2, 3, 4, 5],
  isLoggedIn: true,
};

// log the above information in a formatted string
console.log(
  `User ${user.username} (${user.email}) is ${
    user.isLoggedIn ? 'logged in' : 'not logged in'
  }` +
    ` and has ${user.posts.length} posts.` +
    ` His/her name is ${user.firstName} ${user.lastName}.` +
    ` His/her id is ${user.id}.`
);
