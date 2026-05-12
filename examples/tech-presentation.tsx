// 科技风 PPT 示例：AI 产品发布会
// 使用 open-slide 框架

import { Slide } from '@open-slide/core';

export default function AIPresentation() {
  return (
    <>
      {/* 封面 */}
      <Slide id="cover" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center text-center p-16">
        <div className="w-32 h-1 bg-cyan-500 mb-8" />
        <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
          AI 智能助手
        </h1>
        <p className="text-3xl text-purple-300 mb-4">
          重新定义人机交互的未来
        </p>
        <p className="text-xl text-gray-400 mt-8">
          2026 产品发布会
        </p>
      </Slide>

      {/* 目录 */}
      <Slide id="toc" className="bg-slate-900 p-16">
        <h2 className="text-5xl font-bold text-white mb-12">目录</h2>
        <div className="w-20 h-1 bg-gray-700 mb-12" />
        <div className="space-y-6">
          {['产品介绍', '核心技术', '应用场景', '未来展望'].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-3xl font-bold text-cyan-400 w-16">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-2xl text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </Slide>

      {/* 产品介绍 */}
      <Slide id="intro" className="bg-slate-900 p-16">
        <h2 className="text-4xl font-bold text-white mb-8">产品介绍</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">🎯 核心定位</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              基于大语言模型的智能助手，提供自然语言交互、知识问答、任务执行等能力
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">⚡ 核心优势</h3>
            <ul className="text-xl text-gray-300 space-y-2">
              <li>• 多模态理解能力</li>
              <li>• 上下文记忆</li>
              <li>• 实时联网搜索</li>
              <li>• 代码生成与执行</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* 核心技术 */}
      <Slide id="tech" className="bg-slate-900 p-16">
        <h2 className="text-4xl font-bold text-white mb-8">核心技术</h2>
        <div className="space-y-6">
          <div className="flex items-center bg-slate-800/30 rounded-xl p-6">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-6">
              <span className="text-3xl">🧠</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">大语言模型</h3>
              <p className="text-lg text-gray-400">基于 Transformer 架构，参数规模达千亿级</p>
            </div>
          </div>
          <div className="flex items-center bg-slate-800/30 rounded-xl p-6">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mr-6">
              <span className="text-3xl">👁️</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">多模态融合</h3>
              <p className="text-lg text-gray-400">支持文本、图像、音频的统一理解与生成的</p>
            </div>
          </div>
          <div className="flex items-center bg-slate-800/30 rounded-xl p-6">
            <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mr-6">
              <span className="text-3xl">⚡</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">实时推理</h3>
              <p className="text-lg text-gray-400">响应速度 < 500ms，支持流式输出</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 数据展示 */}
      <Slide id="data" className="bg-slate-900 p-16">
        <h2 className="text-4xl font-bold text-white mb-12">性能指标</h2>
        <div className="space-y-6">
          {[
            { label: '准确率', value: 95 },
            { label: '响应速度', value: 88 },
            { label: '用户满意度', value: 92 },
            { label: '任务完成率', value: 90 }
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-lg text-gray-400 w-32">{item.label}</span>
              <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="text-xl font-bold text-white ml-4 w-20 text-right">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </Slide>

      {/* 应用场景 */}
      <Slide id="scenarios" className="bg-slate-900 p-16">
        <h2 className="text-4xl font-bold text-white mb-8">应用场景</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: '💼', title: '企业办公', desc: '文档处理、数据分析、会议助手' },
            { icon: '🎓', title: '教育学习', desc: '知识问答、作业辅导、课程设计' },
            { icon: '🏥', title: '医疗健康', desc: '症状咨询、报告解读、健康管理' },
            { icon: '🛒', title: '电商零售', desc: '智能客服、商品推荐、订单处理' },
            { icon: '🎨', title: '创意设计', desc: '文案生成、图像创作、视频脚本' },
            { icon: '🔧', title: '技术开发', desc: '代码生成、Bug修复、技术文档' }
          ].map((item, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 未来展望 */}
      <Slide id="future" className="bg-slate-900 p-16">
        <h2 className="text-4xl font-bold text-white mb-8">未来展望</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">多模态深度融合</h3>
              <p className="text-lg text-gray-400">实现文本、图像、音频、视频的无缝理解与生成</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">个性化智能体</h3>
              <p className="text-lg text-gray-400">为每个用户打造专属 AI 助手，深度理解个人需求</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">边缘计算部署</h3>
              <p className="text-lg text-gray-400">支持本地部署，保护隐私的同时提供实时服务</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 结尾 */}
      <Slide id="end" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center text-center p-16">
        <h2 className="text-6xl font-bold text-white mb-8">感谢聆听</h2>
        <p className="text-2xl text-purple-300 mb-4">让我们一起拥抱 AI 时代</p>
        <p className="text-xl text-gray-400">contact@example.com</p>
      </Slide>
    </>
  );
}
