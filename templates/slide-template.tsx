// OpenSlide 页面模板
// 基于 @open-slide/core 框架

import { Slide } from '@open-slide/core';

// ==================== 封面页模板 ====================
export function CoverSlide({ 
  title, 
  subtitle, 
  author,
  date,
  theme = 'tech'
}: {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  theme?: 'tech' | 'business' | 'minimal' | 'colorful';
}) {
  const themes = {
    tech: {
      bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      titleColor: 'text-white',
      subtitleColor: 'text-purple-300',
      accent: 'bg-cyan-500'
    },
    business: {
      bg: 'bg-gradient-to-br from-blue-900 to-blue-700',
      titleColor: 'text-white',
      subtitleColor: 'text-blue-200',
      accent: 'bg-white'
    },
    minimal: {
      bg: 'bg-white',
      titleColor: 'text-gray-900',
      subtitleColor: 'text-gray-600',
      accent: 'bg-gray-900'
    },
    colorful: {
      bg: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600',
      titleColor: 'text-white',
      subtitleColor: 'text-yellow-100',
      accent: 'bg-yellow-400'
    }
  };

  const t = themes[theme];

  return (
    <Slide id="cover" className={`${t.bg} flex flex-col justify-center items-center text-center p-16`}>
      <div className={`w-24 h-1 ${t.accent} mb-8`} />
      <h1 className={`text-7xl font-bold ${t.titleColor} mb-6 tracking-tight`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-3xl ${t.subtitleColor} mb-12`}>
          {subtitle}
        </p>
      )}
      <div className="mt-auto">
        {author && <p className={`text-xl ${t.subtitleColor} mb-2`}>{author}</p>}
        {date && <p className={`text-lg ${t.subtitleColor}`}>{date}</p>}
      </div>
    </Slide>
  );
}

// ==================== 目录页模板 ====================
export function TOCSlide({ 
  items,
  title = '目录',
  theme = 'tech'
}: {
  items: string[];
  title?: string;
  theme?: 'tech' | 'business' | 'minimal' | 'colorful';
}) {
  const themes = {
    tech: {
      bg: 'bg-slate-900',
      titleColor: 'text-white',
      itemColor: 'text-gray-300',
      numberColor: 'text-cyan-400',
      lineColor: 'bg-gray-700'
    },
    business: {
      bg: 'bg-white',
      titleColor: 'text-blue-900',
      itemColor: 'text-gray-700',
      numberColor: 'text-blue-600',
      lineColor: 'bg-blue-200'
    },
    minimal: {
      bg: 'bg-gray-50',
      titleColor: 'text-gray-900',
      itemColor: 'text-gray-600',
      numberColor: 'text-gray-400',
      lineColor: 'bg-gray-300'
    },
    colorful: {
      bg: 'bg-gradient-to-br from-purple-50 to-pink-50',
      titleColor: 'text-purple-900',
      itemColor: 'text-gray-700',
      numberColor: 'text-pink-500',
      lineColor: 'bg-pink-200'
    }
  };

  const t = themes[theme];

  return (
    <Slide id="toc" className={`${t.bg} p-16`}>
      <h2 className={`text-5xl font-bold ${t.titleColor} mb-12`}>{title}</h2>
      <div className={`w-20 h-1 ${t.lineColor} mb-12`} />
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className={`text-3xl font-bold ${t.numberColor} w-16`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`text-2xl ${t.itemColor}`}>{item}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}

// ==================== 内容页模板 ====================
export function ContentSlide({
  title,
  content,
  layout = 'default',
  theme = 'tech'
}: {
  title: string;
  content: React.ReactNode;
  layout?: 'default' | 'split' | 'center';
  theme?: 'tech' | 'business' | 'minimal' | 'colorful';
}) {
  const themes = {
    tech: {
      bg: 'bg-slate-900',
      titleColor: 'text-white',
      contentColor: 'text-gray-300'
    },
    business: {
      bg: 'bg-white',
      titleColor: 'text-blue-900',
      contentColor: 'text-gray-700'
    },
    minimal: {
      bg: 'bg-white',
      titleColor: 'text-gray-900',
      contentColor: 'text-gray-600'
    },
    colorful: {
      bg: 'bg-gradient-to-br from-orange-50 to-pink-50',
      titleColor: 'text-purple-900',
      contentColor: 'text-gray-700'
    }
  };

  const t = themes[theme];

  return (
    <Slide id={`content-${title}`} className={`${t.bg} p-16`}>
      <h2 className={`text-4xl font-bold ${t.titleColor} mb-8`}>{title}</h2>
      <div className={`text-xl ${t.contentColor} leading-relaxed`}>
        {content}
      </div>
    </Slide>
  );
}

// ==================== 数据页模板 ====================
export function DataSlide({
  title,
  data,
  chartType = 'bar',
  theme = 'tech'
}: {
  title: string;
  data: { label: string; value: number; color?: string }[];
  chartType?: 'bar' | 'pie' | 'line';
  theme?: 'tech' | 'business' | 'minimal' | 'colorful';
}) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const themes = {
    tech: {
      bg: 'bg-slate-900',
      titleColor: 'text-white',
      barColor: 'bg-cyan-500',
      labelColor: 'text-gray-400'
    },
    business: {
      bg: 'bg-white',
      titleColor: 'text-blue-900',
      barColor: 'bg-blue-500',
      labelColor: 'text-gray-600'
    },
    minimal: {
      bg: 'bg-gray-50',
      titleColor: 'text-gray-900',
      barColor: 'bg-gray-800',
      labelColor: 'text-gray-500'
    },
    colorful: {
      bg: 'bg-gradient-to-br from-purple-50 to-pink-50',
      titleColor: 'text-purple-900',
      barColor: 'bg-pink-500',
      labelColor: 'text-gray-600'
    }
  };

  const t = themes[theme];

  return (
    <Slide id="data" className={`${t.bg} p-16`}>
      <h2 className={`text-4xl font-bold ${t.titleColor} mb-12`}>{title}</h2>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className={`text-lg ${t.labelColor} w-32`}>{item.label}</span>
            <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
              <div 
                className={`h-full ${item.color || t.barColor} rounded-full transition-all duration-1000`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
            <span className={`text-xl font-bold ${t.titleColor} ml-4 w-20 text-right`}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </Slide>
  );
}

// ==================== 结尾页模板 ====================
export function EndSlide({
  title = '感谢聆听',
  subtitle,
  contact,
  theme = 'tech'
}: {
  title?: string;
  subtitle?: string;
  contact?: string;
  theme?: 'tech' | 'business' | 'minimal' | 'colorful';
}) {
  const themes = {
    tech: {
      bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      titleColor: 'text-white',
      subtitleColor: 'text-purple-300'
    },
    business: {
      bg: 'bg-gradient-to-br from-blue-900 to-blue-700',
      titleColor: 'text-white',
      subtitleColor: 'text-blue-200'
    },
    minimal: {
      bg: 'bg-gray-900',
      titleColor: 'text-white',
      subtitleColor: 'text-gray-400'
    },
    colorful: {
      bg: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600',
      titleColor: 'text-white',
      subtitleColor: 'text-yellow-100'
    }
  };

  const t = themes[theme];

  return (
    <Slide id="end" className={`${t.bg} flex flex-col justify-center items-center text-center p-16`}>
      <h2 className={`text-6xl font-bold ${t.titleColor} mb-8`}>{title}</h2>
      {subtitle && <p className={`text-2xl ${t.subtitleColor} mb-8`}>{subtitle}</p>}
      {contact && <p className={`text-xl ${t.subtitleColor}`}>{contact}</p>}
    </Slide>
  );
}
