import Image from 'next/image';
import { useState } from 'react';

interface CertificationCardProps {
  title: string;
  description: string;
  imagem?: string;
  link?: string;
}

export default function CertificationCard({ title, description, imagem, link }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg transition-all duration-300 w-full max-w-2xl mx-auto overflow-hidden
        ${isHovered ? 'shadow-2xl transform -translate-y-1 border-teal-200 bg-gradient-to-br from-white to-teal-50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => link && window.open(link, '_blank')}
      style={{ cursor: link ? 'pointer' : 'default' }}
    >
      {/* Imagem de fundo em todas as telas */}
      {imagem && (
        <div className="absolute inset-0 opacity-15 z-0">
          <Image 
            src={imagem} 
            alt={`${title} background`} 
            fill 
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col gap-3">
        <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
          isHovered ? 'text-teal-700' : 'text-teal-600'
        }`}>
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700">{description}</p>

        {link && isHovered && (
          <div className="text-teal-600 font-medium text-sm animate-pulse">
            Clique para ver detalhes
          </div>
        )}
      </div>
    </div>
  );
}
