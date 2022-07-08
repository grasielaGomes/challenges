currentUser = [
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
];

const userLikedBooks = ["Moby Dick", "Ulysses"];
const numberOfFriends = 5;
const friendsLikedBooks = currentUser
  .map((friend) => friend.likes.books)
  .flat();

const potentialBooks = friendsLikedBooks.filter((book) => {
  if (!userLikedBooks.includes(book)) return book;
});

let scoreLikes = {};

for (const book of potentialBooks) {
  scoreLikes[book] = scoreLikes[book] + 1 || 1;
}

const sortedList = Object.entries(scoreLikes)
  .sort(([, a], [, b]) => b - a)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

const booksNew = [];
for (const book in sortedList) {
  const percentage = sortedList[book] / numberOfFriends;
  if (percentage >= 0.3) {
    booksNew.push(book);
  }
}


console.log(scoreLikes);
console.log(booksNew);
