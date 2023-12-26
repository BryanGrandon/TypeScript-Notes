// -------- Interface -------- //

interface BookInterface {
  // Required
  title: string;
  author: string;

  // Optional ( ? )
  pages?: number;

  // Read only
  readonly id: number;
}
let isInterface: BookInterface = {
  title: "Types",
  author: "Users",
  id: 22,
};

// -------- Type -------- //

type BookType = {
  // Required
  title: string;
  author: string;

  // Optional ( ? )
  pages?: number;

  // Read only
  readonly id: number;
};

let isType: BookType = {
  title: "Type",
  author: "User",
  id: 21,
};
