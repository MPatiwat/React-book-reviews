const FIREBASE_DOMAIN =
  "https://arn-rai-dee-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function getAllUser() {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedUsers = [];

  for (const key in data) {
    const usersObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(usersObj);
  }

  return transformedUsers;
}

export async function addUser(userData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/users/${userData.username}.json`,
    {
      method: "PUT",
      body: JSON.stringify(userData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function addBook(bookData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Books/${bookData.bookId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(bookData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create book.");
  }

  return null;
}

export async function addComment(commentData) {
  console.log(commentData.name)
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Comment/${commentData.name}.json`,
    {
      method: "PUT",
      body: JSON.stringify(commentData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create book.");
  }

  return null;
}

export async function deleteUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userData}.json`, {
    method: "DELETE",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function getProfile(username) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${username}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch username");
  }

  const loadedQuote = {
    id: username,
    ...data,
  };

  return loadedQuote;
}

export async function getAllBooks() {
  const response = await fetch(`${FIREBASE_DOMAIN}/Books.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch books.");
  }

  const transformedBooks = [];

  for (const key in data) {
    const bookObj = {
      id: key,
      ...data[key],
    };

    transformedBooks.push(bookObj);
  }

  return transformedBooks;
}

export async function getSingleBook(bookId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Books/${bookId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedBook = {
    id: bookId,
    ...data,
  };

  return loadedBook;
}
