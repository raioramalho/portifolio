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
      className={`p-6 border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ${
        isHovered ? 'shadow-2xl transform -translate-y-1 border-teal-200 bg-gradient-to-br from-white to-teal-50' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => link && window.open(link, '_blank')}
      style={{ cursor: link ? 'pointer' : 'default' }}
    >
      <div className="flex items-start">
        {imagem && (
          <div className="mr-4">
            <div className={`w-100 h-100 flex items-center justify-center rounded-full ${
              isHovered ? 'bg-teal-500 text-white' : 'bg-teal-100 text-teal-500'
            } transition-colors duration-300`}>
              <Image src={imagem} alt={title} width={300} height={300}/>
            </div>
          </div>
        )}
        <div>
          <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
            isHovered ? 'text-teal-700' : 'text-teal-600'
          }`}>
            {title}
          </h3>
          <p className="text-gray-700">{description}</p>
          
          {link && isHovered && (
            <div className="mt-4 text-teal-600 font-medium text-sm animate-pulse">
              Clique para ver detalhes
            </div>
          )}
        </div>
      </div>
    </div>
  );
}