export type PostSummary = {
  title: string;
  href: string;
  date: string;
  dateLabel: string;
  background: string;
  excerpt: string;
};

export const posts: PostSummary[] = [
  {
    title: "Building a BrewMap - Part 1: The Data",
    href: "/2023/06/07/rube-goldberg-brew-map/",
    date: "2023-06-07",
    dateLabel: "June 07, 2023",
    background: "/img/posts/banner_image_data.png",
    excerpt:
      "Untappd does not make it easy to get your own data back, so the first challenge was finding a source that was exportable and automatable."
  },
  {
    title: "My BrewMap",
    href: "/2022/07/07/my-brewmap/",
    date: "2022-08-07",
    dateLabel: "August 07, 2022",
    background: "/img/posts/post_1_brewmap.png",
    excerpt:
      "The post I meant to write turned into a map of every beer check-in instead, which was frankly predictable."
  }
];
