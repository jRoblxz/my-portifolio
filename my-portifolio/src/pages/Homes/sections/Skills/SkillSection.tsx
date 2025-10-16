// src/sections/SkillsSection.tsx
import { motion } from 'framer-motion';

import unityIcon from '../../../../assets/Images/unity.png'
import pythonIcon from '../../../../assets/Images/python.svg'
import csharpIcon from '../../../../assets/Images/csharp.svg'
import reactIcon from '../../../../assets/Images/react.svg'
import htmlIcon from '../../../../assets/Images/html.svg'
import cssIcon from '../../../../assets/Images/css.svg'
import gitIcon from '../../../../assets/Images/git.svg'
import githubIcon from '../../../../assets/Images/github.png'
import figmaIcon from '../../../../assets/Images/figma.svg'
import mysqlIcon from '../../../../assets/Images/mysql.svg'
import StyeledPHP from '../../../../components/StyledButton/StyledPHP'
import StyeledLaravel from '../../../../components/StyledButton/StyledLavarel'

interface Skill {
  name: string
  level: number
  icon: string
}


const skills: Skill[] = [
  { name: 'HTML', level: 5, icon: htmlIcon },
  { name: 'CSS', level: 5, icon: cssIcon },
  { name: 'Python', level: 4.5, icon: pythonIcon },
  { name: 'Figma', level: 4.5, icon: figmaIcon },
  { name: 'C#', level: 4, icon: csharpIcon },
  { name: 'GitHub', level: 4, icon: githubIcon },
  { name: 'Git', level: 3.5, icon: gitIcon },
  { name: 'React', level: 3, icon: reactIcon },
  { name: 'MySQL', level: 3, icon: mysqlIcon },
  { name: 'Unity', level: 2.5, icon: unityIcon },
]
export function SkillsSection() {
  return (
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <StyeledPHP />
            <StyeledLaravel />
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
            </div>
        </motion.div>
      </div>
    </section>
  );
}