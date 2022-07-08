const userBooks = {
  likes: {
    books: ["Moby Dick", "Ulysses"]
  },
  friends: [
    {
      id: "YazL",
      likes: {
        books: ["Ulysses", "War and Peace"]
      }
    },
    {
      id: "queen9",
      likes: {
        books: ["The Great Gatsby", "Ulysses"]
      }
    },
    {
      id: "joyJoy",
      likes: {
        books: ["Don Quixote", "The Great Gatsby"]
      }
    },
    {
      id: "0sin5k1",
      likes: {
        books: ["The Great Gatsby", "War and Peace"]
      }
    },
    {
      id: "mariP",
      likes: {
        books: ["Don Quixote", "Hamlet", "Ulysses"]
      }
    }
  ]
};

const user2 = {
  likes: { books: [] },
  friends: [
    {
      id: "friend1",
      likes: { books: ["Book1"] }
    },
    {
      id: "friend2",
      likes: { books: ["Book2"] }
    }
  ]
};

 const user3 = {
   likes: { books: [] },
   friends: [
     {
       id: "friend1",
       likes: {
         books: ["Book1"]
       }
     },
     {
       id: "friend2",
       likes: {
         books: ["Book1", "Book2"]
       }
     },
     {
       id: "friend3",
       likes: {
         books: ["Book1", "Book2", "Book3"]
       }
     }
   ]
 };

 const user = {
   id: "mrouk3",
   likes: {
     books: ["Moby Dick", "Ulysses"]
   },
   friends: [
     {
       id: "YazL",
       likes: {
         books: ["Ulysses", "War and Peace"]
       }
     },
     {
       id: "queen9",
       likes: {
         books: ["The Great Gatsby", "Ulysses"]
       }
     },
     {
       id: "joyJoy",
       likes: {
         books: ["Don Quixote", "The Great Gatsby"]
       }
     },
     {
       id: "0sin5k1",
       likes: {
         books: ["The Great Gatsby", "War and Peace"]
       }
     },
     {
       id: "mariP",
       likes: {
         books: ["Don Quixote", "Hamlet", "Ulysses"]
       }
     }
   ]
 };



const numberOfFriends = user.friends.length;
const likeByUser = user.likes.books;
const likesByFriends = user.friends.reduce((acc, friend) => {
  return acc.concat(friend.likes.books);
}, []);

let scoreLikes = {};

for (const book of likesByFriends) {
  scoreLikes[book] = scoreLikes[book] + 1 || 1;
}

for (const book in scoreLikes) {
  scoreLikes[book] = scoreLikes[book] / numberOfFriends;
}

const sortedList = Object.entries(scoreLikes)
  .sort(([, a], [, b]) => b - a)
  .sort(([ka, va], [kb, vb]) => {
    if (va === vb) return ka.localeCompare(kb);
    return vb - va;
  })
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

const scoredList = [];
for (const book in sortedList) {
  if (sortedList[book] >= 0.3) {
    scoredList.push(book);
  }
}

const potentialBooks = scoredList.filter((book) => {
  if (!likeByUser.includes(book)) return book;
});


console.log(potentialBooks);