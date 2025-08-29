import Hero from "@/components/layout/Landing/Hero"
import About from "@/components/layout/Landing/About"
import Skills from "@/components/layout/Landing/Skills"
import Projects from "@/components/layout/Landing/Projects"
import Contact from "@/components/layout/Landing/Contact"
import { lang } from "@/lib/translation"
import { Suspense } from "react"
import BlogShowcase from "@/components/layout/Landing/BlogShowcase"

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
      <section id="blog">
        <Suspense>
          <BlogShowcase lang={lang}/>
        </Suspense>
      </section>
    </>
  )
}
