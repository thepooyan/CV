import Hero from "@/components/layout/Landing/Hero"
import { blogPosts } from "@/lib/data"
import About from "@/components/layout/Landing/About"
import Skills from "@/components/layout/Landing/Skills"
import Projects from "@/components/layout/Landing/Projects"
import Contact from "@/components/layout/Landing/Contact"
import { lang } from "@/lib/translation"
import BlogShowcase from "@/components/layout/Landing/Blog"

interface props {
  params: Promise<{lang: lang}>
}
export default async function CVWebsite({params}:props) {
  const {lang} = await params
  return (
    <>
      <Hero lang={lang}/>
      <About lang={lang}/>
      <Skills lang={lang}/>
      <Projects lang={lang}/>
      <Contact lang={lang}/>
      <BlogShowcase blogs={blogPosts}/>
    </>
  )
}
