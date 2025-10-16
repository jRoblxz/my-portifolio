import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import './App.css'
import { Button } from '@/components/ui/button'

// Import assets
import avatarImg from './assets/Images/Avatar.jpeg'
// import unityIcon from './assets/unity.png'
// import phpIcon from './assets/php.png'
// import laravelIcon from './assets/laravel.png'
// import pythonIcon from './assets/python.png'
// import csharpIcon from './assets/csharp.png'
// import reactIcon from './assets/react.png'
// import htmlIcon from './assets/html.png'
// import cssIcon from './assets/css.png'
// import gitIcon from './assets/git.png'
// import githubIcon from './assets/github.png'
// import figmaIcon from './assets/figma.png'
// import mysqlIcon from './assets/mysql.png'

// interface Skill {
//   name: string
//   level: number
//   icon: string
// }

interface Project {
  name: string
  description: string
  technologies: string[]
  link: string
}

// const skills: Skill[] = [
//   { name: 'HTML', level: 5, icon: htmlIcon },
//   { name: 'CSS', level: 5, icon: cssIcon },
//   { name: 'Python', level: 4.5, icon: pythonIcon },
//   { name: 'Laravel', level: 4.5, icon: laravelIcon },
//   { name: 'Figma', level: 4.5, icon: figmaIcon },
//   { name: 'PHP', level: 4, icon: phpIcon },
//   { name: 'C#', level: 4, icon: csharpIcon },
//   { name: 'GitHub', level: 4, icon: githubIcon },
//   { name: 'Git', level: 3.5, icon: gitIcon },
//   { name: 'React', level: 3, icon: reactIcon },
//   { name: 'MySQL', level: 3, icon: mysqlIcon },
//   { name: 'Unity', level: 2.5, icon: unityIcon },
// ]

const projects: Project[] = [
  {
    name: 'Projeto TCC',
    description: 'Projeto de Conclusão de Curso focado em Análise e Desenvolvimento de Sistemas, demonstrando aplicação prática de conceitos aprendidos durante a graduação.',
    technologies: ['Python', 'Laravel', 'MySQL', 'React'],
    link: 'https://github.com/jRoblxz/Projeto_TCC'
  },
  {
    name: 'Programação Web Eletiva',
    description: 'Projeto desenvolvido para a disciplina de Linguagem de Programação IV na Fatec, demonstrando habilidades em Desenvolvimento Web e boas práticas de código.',
    technologies: ['HTML', 'CSS', 'PHP', 'React'],
    link: 'https://github.com/jRoblxz/Programacao_Web_Eletiva_1'
  },
  {
    name: 'Jogo da Velha',
    description: 'Primeiro projeto em Unity, ideal para mostrar habilidades em Desenvolvimento de Jogos e a aplicação de lógica com C#.',
    technologies: ['Unity', 'C#'],
    link: 'https://github.com/jRoblxz/JogoDaVelha'
  }
]

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              JPC
            </motion.div>
            <div className="hidden md:flex gap-8">
              {['hero', 'about', 'skills', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                João Pedro
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Costa Roblez
                </span>
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Software Developer
              </motion.p>
              <motion.p
                className="text-lg text-slate-400 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Estudante de Análise e Desenvolvimento de Sistemas na Fatec, apaixonado por criar soluções tecnológicas inovadoras.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => scrollToSection('projects')}
                >
                  Ver Projetos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800"
                  onClick={() => scrollToSection('about')}
                >
                  Sobre Mim
                </Button>
              </motion.div>
              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <a
                  href="https://github.com/jRoblxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:joaopedro@example.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src={avatarImg}
                  alt="João Pedro Costa Roblez"
                  className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Sobre <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mim</span>
            </h2>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Sou João Pedro Costa Roblez, estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>, com grande interesse em criar soluções tecnológicas que unam eficiência e inovação.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Tenho foco no desenvolvimento de sistemas bem estruturados, com atenção à qualidade do código, usabilidade e boas práticas de engenharia de software.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Busco constantemente aprimorar meus conhecimentos e contribuir para projetos que gerem impacto real por meio da tecnologia.
              </p>
              <div className="mt-8 pt-8 border-t border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Formação</h3>
                <p className="text-slate-300">
                  <strong>Fatec - Faculdade de Tecnologia</strong>
                  <br />
                  Análise e Desenvolvimento de Sistemas
                  <br />
                  <span className="text-slate-400">Conclusão prevista: Meio de 2026</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Minhas <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Habilidades</span>
            </h2>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 object-contain" />
                  <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                  <div className="w-full h-2 bg-slate-700 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Meus <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projetos</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-blue-400">{project.name}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-slate-800 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Ver no GitHub <ExternalLink size={16} className="ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="container mx-auto text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} João Pedro Costa Roblez. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/jRoblxz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/joão-pedro-costa-roblez-a87077227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:joaopedro@example.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
