export interface Tool {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  category: string
  categorySlug: string
  rating: number
  reviewCount: number
  pricing: string
  hasFreeTier: boolean
  features: string[]
  pros: string[]
  cons: string[]
  websiteUrl: string
  affiliateUrl?: string
  alternatives: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  toolCount: number
}

export const categories: Category[] = [
  { id: '1', name: 'AI写作', slug: 'ai-writing', description: 'AI驱动的内容创作工具', toolCount: 5 },
  { id: '2', name: 'AI编程', slug: 'ai-coding', description: 'AI代码辅助和开发工具', toolCount: 5 },
  { id: '3', name: 'AI图像', slug: 'ai-image', description: 'AI图像生成和编辑工具', toolCount: 3 },
  { id: '4', name: 'AI对话', slug: 'ai-chat', description: 'AI聊天机器人和对话工具', toolCount: 3 },
  { id: '5', name: '项目管理', slug: 'project-management', description: '团队协作和项目管理工具', toolCount: 3 },
  { id: '6', name: '设计工具', slug: 'design-tools', description: 'UI设计和原型设计工具', toolCount: 3 },
]

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    slug: 'chatgpt',
    tagline: 'OpenAI推出的对话式AI助手',
    description: 'ChatGPT是OpenAI开发的大型语言模型对话系统，支持多轮对话、文本生成、代码编写、翻译等多种任务。基于GPT-4架构，是目前最流行的AI对话工具。',
    category: 'AI对话',
    categorySlug: 'ai-chat',
    rating: 4.5,
    reviewCount: 1280,
    pricing: '免费版 / Plus $20/月',
    hasFreeTier: true,
    features: ['多轮对话', '代码生成', '插件扩展', '自定义指令', '语音对话'],
    pros: ['对话质量高', '知识覆盖面广', '支持中文', '插件生态丰富'],
    cons: ['免费版有使用限制', '知识截止2024年4月', '偶尔会生成错误信息'],
    websiteUrl: 'https://chat.openai.com',
    alternatives: ['Claude', 'Gemini', '文心一言']
  },
  {
    id: '2',
    name: 'Claude',
    slug: 'claude',
    tagline: 'Anthropic出品的安全AI助手',
    description: 'Claude是Anthropic开发的AI助手，以安全性和长文本处理能力著称。支持超长上下文（最高20万token），擅长分析长文档、代码审查和复杂推理任务。',
    category: 'AI对话',
    categorySlug: 'ai-chat',
    rating: 4.7,
    reviewCount: 650,
    pricing: '免费版 / Pro $20/月',
    hasFreeTier: true,
    features: ['超长上下文', '代码审查', '文档分析', '安全对齐', '多模态理解'],
    pros: ['上下文长度极长', '安全性高', '推理能力强', '代码审查优秀'],
    cons: ['免费版每日限制', '部分功能需付费', '创意输出不如GPT-4'],
    websiteUrl: 'https://claude.ai',
    alternatives: ['ChatGPT', 'Gemini', 'Perplexity']
  },
  {
    id: '3',
    name: 'Midjourney',
    slug: 'midjourney',
    tagline: '最热门的AI图像生成工具',
    description: 'Midjourney是目前最受欢迎的AI图像生成工具，以高质量艺术风格图像著称。通过Discord使用，支持多种风格预设和参数调整。',
    category: 'AI图像',
    categorySlug: 'ai-image',
    rating: 4.6,
    reviewCount: 920,
    pricing: 'Basic $10/月 / Standard $30/月',
    hasFreeTier: false,
    features: ['文本生成图像', '图像放大', '风格混合', '参数控制', '社区画廊'],
    pros: ['图像质量极高', '艺术风格独特', '社区活跃', '持续更新'],
    cons: ['需要Discord', '无免费版', '中文理解一般'],
    websiteUrl: 'https://www.midjourney.com',
    alternatives: ['DALL-E 3', 'Stable Diffusion', 'Leonardo AI']
  },
  {
    id: '4',
    name: 'Cursor',
    slug: 'cursor',
    tagline: 'AI驱动的代码编辑器',
    description: 'Cursor是基于VS Code的AI代码编辑器，内置GPT-4模型，支持代码补全、重构、解释和自动生成。支持多种编程语言，是开发者效率提升利器。',
    category: 'AI编程',
    categorySlug: 'ai-coding',
    rating: 4.5,
    reviewCount: 480,
    pricing: '免费版 / Pro $20/月',
    hasFreeTier: true,
    features: ['AI代码补全', '代码解释', '自动重构', '终端集成', '多文件编辑'],
    pros: ['基于VS Code', '代码理解准确', '中文支持好', '免费版够用'],
    cons: ['大型项目偶尔卡顿', '需要联网使用', '自定义模型有限'],
    websiteUrl: 'https://cursor.sh',
    alternatives: ['GitHub Copilot', 'Codeium', 'Tabnine']
  },
  {
    id: '5',
    name: 'Notion',
    slug: 'notion',
    tagline: '全能型协作与知识管理工具',
    description: 'Notion是一款集笔记、数据库、项目管理、团队协作于一体的全能工具。内置AI功能Notion AI，支持自动摘要、写作辅助和内容生成。',
    category: '项目管理',
    categorySlug: 'project-management',
    rating: 4.6,
    reviewCount: 2100,
    pricing: '免费版 / Plus $10/月 / Business $18/月',
    hasFreeTier: true,
    features: ['AI写作', '数据库管理', '项目管理', '团队协作', '知识库'],
    pros: ['功能全面', '模板丰富', '多平台支持', 'API开放'],
    cons: ['学习曲线陡峭', '大文档加载慢', '离线功能有限'],
    websiteUrl: 'https://notion.so',
    alternatives: ['ClickUp', 'Asana', 'Trello']
  },
  {
    id: '6',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    tagline: '微软出品的AI编程助手',
    description: 'GitHub Copilot是GitHub和OpenAI合作开发的AI编程助手，支持Visual Studio、VS Code、JetBrains等主流IDE。能实时生成代码建议、函数实现和测试用例。',
    category: 'AI编程',
    categorySlug: 'ai-coding',
    rating: 4.3,
    reviewCount: 1500,
    pricing: '个人 $10/月 / 企业 $19/月',
    hasFreeTier: false,
    features: ['实时代码建议', '多语言支持', 'IDE集成', '测试生成', '聊天解释'],
    pros: ['IDE集成好', '上下文理解强', '企业支持完善', '代码建议准确'],
    cons: ['需要付费', '偶尔建议不准确', '隐私顾虑', '中文注释支持一般'],
    websiteUrl: 'https://github.com/copilot',
    alternatives: ['Cursor', 'Codeium', 'Tabnine']
  },
  {
    id: '7',
    name: 'DALL-E 3',
    slug: 'dall-e-3',
    tagline: 'OpenAI的图像生成模型',
    description: 'DALL-E 3是OpenAI最新的图像生成模型，能根据文本描述生成高质量图像。集成在ChatGPT Plus中，支持对话式图像生成和编辑。',
    category: 'AI图像',
    categorySlug: 'ai-image',
    rating: 4.2,
    reviewCount: 380,
    pricing: 'ChatGPT Plus $20/月',
    hasFreeTier: false,
    features: ['文本生成图像', '图像编辑', '风格多样', '对话式生成', '安全过滤'],
    pros: ['中文理解好', '与ChatGPT集成', '使用门槛低', '版权安全'],
    cons: ['依赖ChatGPT订阅', '风格不够独特', '图像数量受限'],
    websiteUrl: 'https://openai.com/dall-e-3',
    alternatives: ['Midjourney', 'Stable Diffusion', 'Adobe Firefly']
  },
  {
    id: '8',
    name: 'Figma',
    slug: 'figma',
    tagline: '协作式界面设计工具',
    description: 'Figma是目前最流行的UI/UX设计工具，支持实时协作。内置AI功能如自动布局、组件变体和设计系统管理。',
    category: '设计工具',
    categorySlug: 'design-tools',
    rating: 4.7,
    reviewCount: 1800,
    pricing: '免费版 / 专业 $12/月 / 组织 $45/月',
    hasFreeTier: true,
    features: ['实时协作', '原型设计', '设计系统', 'AI插件', '代码导出'],
    pros: ['协作体验极佳', '社区资源多', '插件生态丰富', '跨平台'],
    cons: ['大型文件卡顿', '依赖网络', '高级功能贵'],
    websiteUrl: 'https://figma.com',
    alternatives: ['Sketch', 'Adobe XD', 'Canva']
  },
  {
    id: '9',
    name: 'ClickUp',
    slug: 'clickup',
    tagline: '一站式项目管理平台',
    description: 'ClickUp是功能最全面的项目管理工具之一，支持任务管理、文档、白板、时间追踪等功能。内置AI助手ClickUp Brain。',
    category: '项目管理',
    categorySlug: 'project-management',
    rating: 4.2,
    reviewCount: 750,
    pricing: '免费版 / 无限 $10/月 / 商务 $19/月',
    hasFreeTier: true,
    features: ['任务管理', '文档协作', '时间追踪', 'AI助手', '自动化'],
    pros: ['功能极全面', '高度可定制', 'AI集成好', '性价比高'],
    cons: ['功能太多复杂', '学习成本高', '界面信息过载'],
    websiteUrl: 'https://clickup.com',
    alternatives: ['Notion', 'Asana', 'Monday.com']
  },
  {
    id: '10',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    tagline: '开源AI图像生成模型',
    description: 'Stable Diffusion是开源的AI图像生成模型，支持本地部署和在线使用。拥有庞大的社区和丰富的微调模型，适合有技术基础的用户。',
    category: 'AI图像',
    categorySlug: 'ai-image',
    rating: 4.4,
    reviewCount: 520,
    pricing: '免费开源 / 云服务按需付费',
    hasFreeTier: true,
    features: ['文本生成图像', '图像修复', '图像扩展', '模型微调', 'ControlNet'],
    pros: ['完全开源免费', '可本地部署', '社区庞大', '高度可控'],
    cons: ['需要技术门槛', '配置复杂', '硬件要求高'],
    websiteUrl: 'https://stability.ai',
    alternatives: ['Midjourney', 'DALL-E 3', 'Leonardo AI']
  },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug)
}

export function getToolsByCategory(slug: string): Tool[] {
  return tools.filter(t => t.categorySlug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase()
  return tools.filter(t => 
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.features.some(f => f.toLowerCase().includes(q))
  )
}
