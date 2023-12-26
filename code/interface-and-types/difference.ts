// Interface //

interface Book {
  title: string;
  url: string;
  pages: number;
}

// Declaration Merging

interface Book {
  author: string;
}

// Type //

type Course = {
  title: string;
  url: string;
  chapters: number;
};

// Unions

type LearningResource = Course | Book;

// Tuples

type CourseLearners = [Course, number];
