// 商务风 PPT 示例：公司年度总结
// 使用 open-slide 框架

import { Slide } from '@open-slide/core';

export default function BusinessPresentation() {
  return (
    <>
      {/* 封面 */}
      <Slide id="cover" className="bg-gradient-to-br from-blue-900 to-blue-700 flex flex-col justify-center items-center text-center p-16">
        <div className="w-24 h-1 bg-white mb-8" />
        <h1 className="text-6xl font-bold text-white mb-6">
          2025 年度总结
        </h1>
        <p className="text-2xl text-blue-200 mb-8">
          回顾过去 · 展望未来
        </p>
        <div className="mt-auto">
          <p className="text-xl text-blue-200">科技创新有限公司</p>
          <p className="text-lg text-blue-300 mt-2">2026年1月</p>
        </div>
      </Slide>

      {/* 目录 */}
      <Slide id="toc" className="bg-white p-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">目录</h2>
        <div className="w-16 h-1 bg-blue-200 mb-8" />
        <div className="grid grid-cols-2 gap-6">
          {[
            { num: '01', title: '年度业绩回顾', desc: '营收增长与市场份额' },
            { num: '02', title: '核心项目成果', desc: '重点项目交付情况' },
            { num: '03', title: '团队建设发展', desc: '人才招聘与培养' },
            { num: '04', title: '2026年规划', desc: '战略目标与行动计划' }
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl font-bold text-blue-600">{item.num}</span>
              <h3 className="text-xl font-bold text-blue-900 mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 业绩回顾 */}
      <Slide id="performance" className="bg-white p-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">年度业绩回顾</h2>
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <p className="text-5xl font-bold text-blue-600 mb-2">¥2.5亿</p>
            <p className="text-gray-600">年度营收</p>
            <p className="text-green-500 text-sm mt-2">↑ 35% 同比增长</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <p className="text-5xl font-bold text-blue-600 mb-2">150+</p>
            <p className="text-gray-600">服务客户</p>
            <p className="text-green-500 text-sm mt-2">↑ 20% 新增</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <p className="text-5xl font-bold text-blue-600 mb-2">98%</p>
            <p className="text-gray-600">客户满意度</p>
            <p className="text-green-500 text-sm mt-2">↑ 3% 提升</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">关键里程碑</h3>
          <div className="flex justify-between">
            {['Q1: 产品上线', 'Q2: 市场扩张', 'Q3: 融资完成', 'Q4: 盈利转正'].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mx-auto mb-2" />
                <p className="text-gray-700">{milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 项目成果 */}
      <Slide id="projects" className="bg-white p-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">核心项目成果</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">智能云平台升级</h3>
            <p className="text-gray-600 mb-2">完成核心架构重构，系统稳定性提升至 99.99%</p>
            <div className="flex gap-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">提前交付</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">客户好评</span>
            </div>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">AI 助手产品发布</h3>
            <p className="text-gray-600 mb-2">全新 AI 产品线，上线首月获得 10 万+ 用户</p>
            <div className="flex gap-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">创新产品</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">行业领先</span>
            </div>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">企业级解决方案</h3>
            <p className="text-gray-600 mb-2">为 50+ 大型企业定制解决方案，续约率 95%</p>
            <div className="flex gap-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">高价值</span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">标杆案例</span>
            </div>
          </div>
        </div>
      </Slide>

      {/* 团队建设 */}
      <Slide id="team" className="bg-white p-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">团队建设发展</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">人员增长</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 w-24">年初</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6">
                  <div className="bg-blue-400 h-6 rounded-full" style={{width: '60%'}} />
                </div>
                <span className="text-gray-700 ml-4">80人</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 w-24">年末</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6">
                  <div className="bg-blue-600 h-6 rounded-full" style={{width: '100%'}} />
                </div>
                <span className="text-gray-700 ml-4">150人</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">人才结构</h3>
            <div className="space-y-3">
              {[
                { label: '研发人员', value: '45%', color: 'bg-blue-600' },
                { label: '产品运营', value: '25%', color: 'bg-blue-400' },
                { label: '市场销售', value: '20%', color: 'bg-blue-300' },
                { label: '职能支持', value: '10%', color: 'bg-blue-200' }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-600 w-24">{item.label}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-4">
                    <div className={`${item.color} h-4 rounded-full`} style={{width: item.value}} />
                  </div>
                  <span className="text-gray-700 ml-4">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 2026规划 */}
      <Slide id="plan" className="bg-white p-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">2026年战略规划</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">🎯 战略目标</h3>
            <ul className="space-y-2">
              <li>• 营收突破 5 亿元</li>
              <li>• 市场份额提升至 15%</li>
              <li>• 海外市场拓展至 3 个国家</li>
              <li>• 团队规模达到 300 人</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">🚀 行动计划</h3>
            <ul className="space-y-2">
              <li>• Q1: 新产品线发布</li>
              <li>• Q2: 海外市场启动</li>
              <li>• Q3: 技术平台升级</li>
              <li>• Q4: 生态合作伙伴拓展</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* 结尾 */}
      <Slide id="end" className="bg-gradient-to-br from-blue-900 to-blue-700 flex flex-col justify-center items-center text-center p-16">
        <h2 className="text-5xl font-bold text-white mb-6">携手共进 再创辉煌</h2>
        <p className="text-xl text-blue-200 mb-8">感谢每一位团队成员的辛勤付出</p>
        <div className="mt-8">
          <p className="text-blue-300">科技创新有限公司</p>
          <p className="text-blue-400 mt-2">www.example.com</p>
        </div>
      </Slide>
    </>
  );
}
