const noUserLikedBooks = currentUser.likes.books.length === 0;
const noFriends = currentUser.friends.length === 0;

if (noUserLikedBooks && currentUser.friends.length !== 0) {
  console.log("no user liked books but has friends");
  const friends = currentUser.friends.map(({ id, likes: { books } }) => {
    return {
      id,
      likes: books
    };
  });
  return { books: [], friends };
}

if (noUserLikedBooks && noFriends) {
  return { books: [] };
}
const numberOfFriends = currentUser.friends.length;
const userLikedBooks = currentUser.likes.books;
const friendsLikedBooks = currentUser.friends
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
  .sort(([ka, va], [kb, vb]) => {
    if (va === vb) return ka.localeCompare(kb);
    return vb - va;
  })
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
const potencialBasedOnMinimal = [];
for (const book in sortedList) {
  const percentage = sortedList[book] / numberOfFriends;
  if (percentage >= minimalScore) {
    potencialBasedOnMinimal.push(book);
  }
}

if (minimalScore === 0) return { books: Set(potentialBooks) };
else
  return {
    books: potencialBasedOnMinimal
  };
