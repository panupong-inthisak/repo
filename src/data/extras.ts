import type { Text } from './content'

const t = (th: string, en: string = th): Text => ({ th, en })

const base = import.meta.env.BASE_URL

export const statement = {
  lead: t('ผมสร้างเว็บไซต์ที่', 'I build websites that'),
  words: [
    t('ใช้งานได้จริง', 'actually go live'),
    t('รองรับทุกหน้าจอ', 'work on every screen'),
    t('ย้ายระบบได้ราบรื่น', 'migrate smoothly'),
    t('ดูแลต่อได้ยาว ๆ', 'stay maintained for years'),
  ],
  sub: t(
    'กว่า 240 เว็บไซต์ภาครัฐใน 40 จังหวัด ผ่านมือผมตั้งแต่ออกแบบจนถึงหลังเปิดใช้งาน',
    '240+ government websites across 40 provinces — handled from design through post-launch.',
  ),
}

export type StepStatus = 'todo' | 'doing' | 'done'

export const process = {
  title: t('วิธีทำงาน', 'How I work'),
  subtitle: t('ทุกเว็บผ่าน 4 ขั้นตอนนี้ ครบตั้งแต่ต้นจนจบ', 'Every site goes through these four stages, end to end'),
  status: {
    todo: t('รอดำเนินการ', 'Queued'),
    doing: t('กำลังทำ', 'In progress'),
    done: t('เสร็จแล้ว', 'Done'),
  } satisfies Record<StepStatus, Text>,
  steps: [
    {
      icon: '✏️',
      title: t('ออกแบบ', 'Design'),
      desc: t('วางโครงหน้าเว็บและออกแบบ UX/UI ด้วย Figma', 'Plan the layout and design the UX/UI in Figma'),
      tasks: [t('Wireframe'), t('UI ใน Figma', 'UI in Figma'), t('Responsive layout')],
    },
    {
      icon: '⚙️',
      title: t('พัฒนา', 'Develop'),
      desc: t('เขียน Frontend และ Backend ด้วย PHP / CodeIgniter / MySQL', 'Build frontend and backend with PHP / CodeIgniter / MySQL'),
      tasks: [t('Frontend'), t('Back Office'), t('REST API / LINE OA')],
    },
    {
      icon: '🚀',
      title: t('Deploy', 'Deploy'),
      desc: t('ขึ้นระบบบน Hosting ตั้งค่าผ่าน Plesk หรือย้ายจากระบบเดิม', 'Ship to hosting, configure in Plesk or migrate from the old system'),
      tasks: [t('Hosting / Plesk'), t('Domain & SSL'), t('Migration')],
    },
    {
      icon: '🛟',
      title: t('ดูแลต่อ', 'Support'),
      desc: t('ทำคู่มือ ให้ Technical Support และแก้ปัญหาหลังเปิดใช้งาน', 'Write manuals, provide support and fix issues after launch'),
      tasks: [t('คู่มือการใช้งาน', 'User manual'), t('Technical Support'), t('ประสานงานผู้ใช้', 'User coordination')],
    },
  ],
}

export const floatingCta = {
  label: t('สนใจร่วมงาน?', 'Interested?'),
  contact: t('ติดต่อ', 'Contact'),
  resume: t('Resume', 'CV'),
}

export const strengths = {
  title: t('ทำไมต้องผม', 'Why work with me'),
  items: [
    {
      icon: '📱',
      title: t('รองรับทุกอุปกรณ์', 'Every device'),
      desc: t('Desktop, Tablet และ Mobile ด้วย Responsive Design', 'Desktop, tablet and mobile with responsive design'),
    },
    {
      icon: '🌏',
      title: t('หลายภาษา', 'Multilingual'),
      desc: t('เคยทำเว็บ 3 ภาษา ไทย / อังกฤษ / จีน', 'Shipped a site in Thai, English and Chinese'),
    },
    {
      icon: '🔁',
      title: t('ย้ายระบบได้', 'Migrations'),
      desc: t('ย้ายจากแพลตฟอร์มเดิมสู่แพลตฟอร์มใหม่ พร้อมปรับปรุง', 'Move legacy platforms to new ones and modernize them'),
    },
    {
      icon: '🛡️',
      title: t('ดูแลหลังเปิดใช้', 'Post-launch care'),
      desc: t('คู่มือ Support และแก้ปัญหาเว็บที่ใช้งานจริง', 'Manuals, support and fixes for live sites'),
    },
  ],
}

export const beforeAfter = {
  title: t('ก่อน / หลัง Migration', 'Before / after migration'),
  subtitle: t('ลากแถบเพื่อเทียบเว็บเดิมกับเว็บใหม่ (ภาพจำลอง)', 'Drag to compare the old and new site (illustration)'),
  before: t('ระบบเดิม', 'Legacy'),
  after: t('ระบบใหม่', 'New'),
  points: [
    t('รองรับมือถือ', 'Mobile-ready'),
    t('ระบบหลังบ้านใหม่', 'New back office'),
    t('ดีไซน์ทันสมัย', 'Modern design'),
  ],
}

export const projectsRail = {
  title: t('ผลงาน', 'Work'),
  subtitle: t('ปัดหรือเลื่อนเพื่อดูเพิ่ม', 'Swipe or scroll for more'),
  items: [
    {
      kind: 'shot' as const,
      image: `${base}isanspabiz.png`,
      title: t('isanspabiz.com'),
      desc: t('แพลตฟอร์มสปาอีสาน 20 จังหวัด · หลายภาษา · รีวิว · สมาชิก', 'Isan spa platform · 20 provinces · multilingual · reviews · members'),
      tags: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap 5'],
      url: 'https://isanspabiz.com/',
    },
    {
      kind: 'gov' as const,
      title: t('เว็บไซต์ อบต. และเทศบาล', 'Local government websites'),
      desc: t('พัฒนาและดูแลมากกว่า 240 แห่ง ใน 40 จังหวัด', 'Built and maintained 240+ sites across 40 provinces'),
      tags: ['PHP', 'Responsive', 'Plesk'],
    },
    {
      kind: 'eservice' as const,
      title: t('ระบบ e-Service', 'e-Service system'),
      desc: t('ระบบบริการออนไลน์สำหรับหน่วยงานท้องถิ่น', 'Online services for local agencies'),
      tags: ['PHP', 'MySQL'],
    },
    {
      kind: 'line' as const,
      title: t('แจ้งเตือน LINE OA & Email', 'LINE OA & email alerts'),
      desc: t('ส่งแจ้งเตือนอัตโนมัติผ่าน LINE Messaging API และอีเมล', 'Automatic alerts via LINE Messaging API and email'),
      tags: ['REST API', 'LINE Messaging API'],
    },
    {
      kind: 'admin' as const,
      title: t('Back Office', 'Back office'),
      desc: t('ระบบหลังบ้านจัดการเนื้อหาและข้อมูลเว็บไซต์', 'Admin panel for site content and data'),
      tags: ['CodeIgniter', 'MySQL', 'Bootstrap 5'],
    },
  ],
}

export const builtWith = {
  prefix: t('ออกแบบและพัฒนาด้วย', 'Designed & built with'),
  tech: 'React + Motion',
  note: t(
    'ปัจจุบันกำลังพัฒนาทักษะ React และ AI-Assisted Development เว็บนี้คือผลงานจากการเรียนรู้นั้น',
    "I'm currently leveling up in React and AI-assisted development — this site is the result.",
  ),
  badge: t('กำลังเรียนรู้', 'Learning'),
}
