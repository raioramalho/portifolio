interface SkillBarProps {
    skill: string;
    percentage: number;
    color: string;
  }
  
  export default function SkillBar({ skill, percentage, color }: SkillBarProps) {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-700 font-medium">{skill}</span>
          <span className="text-sm text-gray-500">{percentage}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className={`h-full rounded-full ${color}`} 
            style={{ width: `${percentage}%`, transition: 'width 1s ease-in-out' }}
          ></div>
        </div>
      </div>
    );
  }