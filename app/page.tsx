import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        nigel loh
      </h1>
      <p className="mb-4">
        {`undergrad cs student, avid sports player (hockey/tennis/volleyball), casual film maker.`}
      </p>
      <div className="my-8">
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          blogs
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
