import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Blog",
    description: "Blog posts",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Blog")}`,
    path: "/blog",
  });
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Blog"
        description="Blog posts"
        path="/blog"
        image={`/api/og/generate?title=${encodeURIComponent("Blog")}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        Blog
      </Heading>
      <Column fillWidth flex={1}>
        <Posts range={[1,1]} thumbnail direction="column"/>
        <Posts range={[2,3]} thumbnail/>
        <Posts range={[4]} columns="2"/>
      </Column>
    </Column>
  );
}
