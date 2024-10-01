import { BlogPosts } from 'app/components/posts'
import { Projects } from 'app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        nigel loh
      </h1>
      <p className="mb-4">
        {`undergrad math+cs student, avid sports player (hockey/tennis/volleyball), casual film maker.`}
      </p>
      <div className="mb-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">
          projects
        </h2>
        <Projects />
      </div>
      <div className="mb-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">
          blogs
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
