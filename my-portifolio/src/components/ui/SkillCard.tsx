import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: number;
  description: string;
  delay?: number;
}

export function SkillCard({ name, icon, color, level, description, delay = 0 }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { text: "Expert", color: "#10B981" };
    if (level >= 80) return { text: "Avançado", color: "#3B82F6" };
    if (level >= 70) return { text: "Intermediário", color: "#F59E0B" };
    return { text: "Básico", color: "#EF4444" };
  };

  const skillLevel = getSkillLevel(level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden transition-all duration-300 group-hover:border-gray-600">
        {/* Glow effect */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`}
          style={{ backgroundColor: color + '20' }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div 
            className="flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: color + '20' }}
          >
            <div style={{ color: color }}>
              {icon}
            </div>
          </div>

          {/* Name */}
          <h4 className="text-xl font-bold text-white mb-2">
            {name}
          </h4>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Skill Level */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium" style={{ color: skillLevel.color }}>
                {skillLevel.text}
              </span>
              <span className="text-sm text-gray-400">
                {level}%
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full"
                style={{ backgroundColor: skillLevel.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          {/* Hover effect content */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 pt-4 border-t border-gray-700"
            >
              <p className="text-xs text-gray-400">
                Nível: {skillLevel.text}
              </p>
            </motion.div>
          )}
        </div>

        {/* Corner accent */}
        <div 
          className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, transparent 70%)`,
            borderRadius: '50%',
            transform: 'translate(30px, -30px)'
          }}
        />
      </div>
    </motion.div>
  );
}