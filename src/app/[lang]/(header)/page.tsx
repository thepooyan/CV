import Hero from "@/components/layout/Landing/Hero"
import About from "@/components/layout/Landing/About"
import Skills from "@/components/layout/Landing/Skills"
import Projects from "@/components/layout/Landing/Projects"
import Contact from "@/components/layout/Landing/Contact"

export default async function CVWebsite({params}:any) {
  const {lang} = await params
  return (
    <>
      <Hero lang={lang}/>
      <About lang={lang}/>
      <Skills lang={lang}/>
      <Projects lang={lang}/>
      <Contact lang={lang}/>
    </>
  )
}
