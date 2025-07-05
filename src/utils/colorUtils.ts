export const getProjectColorClasses = (projectId: string) => {
  const colorMap: { [key: string]: { text: string; bg: string; border: string } } = {
    'zambo': {
      text: 'text-red-500',
      bg: 'bg-red-500',
      border: 'border-red-500'
    },
    'mondy': {
      text: 'text-yellow-400',
      bg: 'bg-yellow-400',
      border: 'border-yellow-400'
    },
    'skyforce': {
      text: 'text-red-600',
      bg: 'bg-red-600',
      border: 'border-red-600'
    },
    'alpha': {
      text: 'text-yellow-500',
      bg: 'bg-yellow-500',
      border: 'border-yellow-500'
    },
    'zakuza': {
      text: 'text-green-600',
      bg: 'bg-green-600',
      border: 'border-green-600'
    }
  };

  return colorMap[projectId] || {
    text: 'text-white',
    bg: 'bg-white',
    border: 'border-white'
  };
};