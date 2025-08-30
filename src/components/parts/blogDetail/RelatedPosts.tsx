import BlogCard from "../BlogCard";
import { getRelatedPosts } from "@/lib/cache";

interface p {
  tags: string[] | null;
  title: string
}
const RelatedPosts = async ({ tags, title }: p) => {
  if (!tags) return <>No Related Articles found.</>;

  let relatedPosts = await getRelatedPosts(tags, title)

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {relatedPosts.map((relatedPost,i) => <BlogCard post={relatedPost} index={i} key={i}/>)}
      </div>
    </div>
  );
};

export default RelatedPosts;
