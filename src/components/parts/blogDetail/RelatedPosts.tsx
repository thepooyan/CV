import { db } from "@/db";
import { blogsTable } from "@/db/schema";
import { and, eq, not, sql } from "drizzle-orm";
import BlogCard from "../BlogCard";

interface p {
  tags: string[] | null;
  title: string
}
const RelatedPosts = async ({ tags, title }: p) => {
  if (!tags) return <>No Related Articles found.</>;

  let relatedPosts = await db.select()
    .from(blogsTable)
    .limit(2).where(
      and(
        sql`
          EXISTS (
            SELECT 1
            FROM json_each(${blogsTable.tags})
            WHERE value IN (${sql.join(tags, sql`, `)})
          )
        `,
        not(eq(blogsTable.title, title))
      )
    )

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
