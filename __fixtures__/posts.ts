const fixture_post = [
   {
      id: 1,
      title: "Lorem Ipsum - What Is It and How to Use It?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      author: "John Doe",
      date: "2023-08-01",
      category: "Technology",
   },
   {
      id: 2,
      title: "The Benefits of Regular Exercise",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      author: "Jane Smith",
      date: "2023-07-25",
      category: "Health & Fitness",
   },
];

export const getFixturePosts = () => Array.from(fixture_post);
export const getFixturePostByIndex = (index: number) => Object.assign({}, fixture_post[index]);
