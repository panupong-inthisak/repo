export type Lang = 'th' | 'en'
export type Text = Record<Lang, string>

const base = import.meta.env.BASE_URL

export const profile = {
  name: { th: 'ภาณุพงศ์ อินทิศักดิ์', en: 'Panupong Inthisak' },
  nameLatin: 'PANUPONG INTHISAK',
  photo: `${base}my_photo2.png`,
  resume: `${base}Panupong_Resume.pdf`,
  email: 'panupong3305@hotmail.com',
  github: 'https://github.com/panupong-inthisak',
  greeting: { th: 'สวัสดีครับ ผม', en: "Hi, I'm" },
  roles: {
    th: ['Web Developer', 'Full-stack PHP Developer', 'Deployment & Migration', 'UX/UI-minded Builder'],
    en: ['Web Developer', 'Full-stack PHP Developer', 'Deployment & Migration', 'UX/UI-minded Builder'],
  },
  tagline: {
    th: 'พัฒนา ติดตั้ง และดูแลเว็บไซต์ภาครัฐที่ใช้งานจริง ตั้งแต่ออกแบบหน้าจอจนถึง Deploy และ Support',
    en: 'I build, deploy and maintain real-world government websites — from UI design all the way to deployment and support.',
  } satisfies Text,
}

export const ui = {
  nav: {
    about: { th: 'เกี่ยวกับ', en: 'About' },
    experience: { th: 'ประสบการณ์', en: 'Experience' },
    projects: { th: 'ผลงาน', en: 'Projects' },
    skills: { th: 'ทักษะ', en: 'Skills' },
    contact: { th: 'ติดต่อ', en: 'Contact' },
  },
  downloadCv: { th: 'ดาวน์โหลด Resume', en: 'Download CV' },
  contactMe: { th: 'ติดต่อผม', en: 'Contact me' },
  scroll: { th: 'เลื่อนลง', en: 'Scroll' },
  present: { th: 'ปัจจุบัน', en: 'Present' },
  visitSite: { th: 'เปิดดูเว็บไซต์', en: 'Visit live site' },
  featured: { th: 'ผลงานเด่น', en: 'Featured project' },
  toggleTheme: { th: 'สลับโหมดสว่าง/มืด', en: 'Toggle light/dark mode' },
  menu: { th: 'เมนู', en: 'Menu' },
  footer: { th: 'ออกแบบและพัฒนาด้วย React + Motion', en: 'Designed & built with React + Motion' },
} satisfies Record<string, Text | Record<string, Text>>

export const stats: { value: number; suffix: string; label: Text }[] = [
  { value: 240, suffix: '+', label: { th: 'เว็บไซต์ที่ดูแล', en: 'Live websites maintained' } },
  { value: 40, suffix: '', label: { th: 'จังหวัดทั่วประเทศ', en: 'Provinces nationwide' } },
  { value: 2, suffix: '+', label: { th: 'ปีประสบการณ์', en: 'Years of experience' } },
]

export const about = {
  title: { th: 'เกี่ยวกับผม', en: 'About me' },
  paragraphs: [
    {
      th: 'นักพัฒนาเว็บไซต์ Full-stack (PHP/CodeIgniter) ประสบการณ์กว่า 2 ปี ดูแลเว็บไซต์ภาครัฐที่ใช้งานจริงมากกว่า 240 แห่งใน 40 จังหวัด ครอบคลุมตั้งแต่ออกแบบ UX/UI ด้วย Figma, พัฒนา Frontend/Backend, เชื่อมต่อ API ไปจนถึง Deploy, Migration และ Support หลังเปิดใช้งาน',
      en: 'Full-stack web developer (PHP/CodeIgniter) with 2+ years of experience, maintaining 240+ live government websites across 40 provinces — from UX/UI design in Figma, frontend/backend development and API integration through to deployment, migration and post-launch support.',
    },
    {
      th: 'สนใจเรียนรู้และประยุกต์ใช้ภาษาโปรแกรม Framework และเครื่องมือใหม่ ๆ รวมถึง AI อย่างต่อเนื่อง เพื่อเพิ่มประสิทธิภาพการพัฒนา และส่งมอบระบบที่มีเสถียรภาพพร้อมใช้งานจริง',
      en: 'I keep learning and applying new programming languages, frameworks and tools — including AI — to work more efficiently and deliver stable, production-ready systems.',
    },
  ] satisfies Text[],
}

export const experience = {
  title: { th: 'ประสบการณ์ทำงาน', en: 'Work experience' },
  jobs: [
    {
      company: 'AS SYSTEM CO., LTD.',
      role: { th: 'นักพัฒนาเว็บไซต์', en: 'Web Developer' },
      start: { th: 'ก.พ. 2024', en: 'Feb 2024' },
      end: null as Text | null,
      points: [
        {
          th: 'พัฒนาและดูแลเว็บไซต์ภาครัฐมากกว่า 240 แห่ง ใน 40 จังหวัด สำหรับองค์การบริหารส่วนตำบล (อบต.) และเทศบาล',
          en: 'Built and maintained 240+ government websites across 40 provinces for Subdistrict Administrative Organizations and municipalities',
        },
        {
          th: 'พัฒนาเว็บไซต์ isanspabiz.com แพลตฟอร์มสปาและสุขภาพภาคอีสาน 20 จังหวัด ครอบคลุมทั้ง Frontend และ Backend รองรับ 3 ภาษา พร้อมระบบค้นหา รีวิว และระบบสมาชิก',
          en: 'Developed isanspabiz.com, a spa & wellness platform covering 20 Isan provinces — frontend and backend, 3 languages, search, reviews and member accounts',
        },
        {
          th: 'พัฒนา Frontend แบบ Responsive รองรับ Desktop, Tablet และ Mobile โดยคำนึงถึง UX/UI รวมถึงพัฒนาระบบ Backend และ Back Office สำหรับจัดการข้อมูลเว็บไซต์',
          en: 'Built responsive frontends for desktop, tablet and mobile with UX/UI in mind, plus backend and back-office systems for managing site data',
        },
        {
          th: 'พัฒนาระบบเสริม เช่น e-Service, แจ้งเตือนผ่าน LINE OA และ Email โดยเชื่อมต่อบริการภายนอกผ่าน REST API',
          en: 'Developed add-on systems such as e-Service and LINE OA / email notifications, integrating external services via REST APIs',
        },
        {
          th: 'ติดตั้งและ Deploy เว็บไซต์บน Hosting พร้อมบริหารจัดการเซิร์ฟเวอร์ผ่าน Plesk',
          en: 'Deployed websites to hosting and managed servers through Plesk',
        },
        {
          th: 'ดำเนินการ Migration ระบบจากแพลตฟอร์มเดิมไปยังแพลตฟอร์มใหม่ พร้อมปรับปรุงให้เหมาะกับการใช้งานปัจจุบัน',
          en: 'Migrated systems from legacy platforms to new ones, modernizing them for current use',
        },
        {
          th: 'จัดทำคู่มือการใช้งาน ให้ Technical Support และแก้ไขปัญหาเว็บไซต์ที่ใช้งานจริง รวมถึงประสานงานกับผู้ใช้งานหลังเปิดให้บริการ',
          en: 'Wrote user manuals, provided technical support and troubleshot live websites, coordinating with users after launch',
        },
      ] satisfies Text[],
    },
  ],
}

export const projects = {
  title: { th: 'ผลงาน', en: 'Projects' },
  featured: {
    name: 'isanspabiz',
    url: 'https://isanspabiz.com/',
    // Put a full-page screenshot at public/projects/isanspabiz.jpg and set this to enable hover-scroll preview
    screenshot: null as string | null,
    description: {
      th: 'แพลตฟอร์มรวมข้อมูลสปาและสุขภาพในภาคอีสาน 20 จังหวัด มีระบบค้นหาและรีวิวสปา เครื่องมือวิเคราะห์อัตลักษณ์สปา แหล่งท่องเที่ยวเชิงสุขภาพ ระบบสมาชิก และรองรับ 3 ภาษา',
      en: 'A spa & wellness platform covering 20 provinces of Northeastern Thailand — spa directory with reviews, a spa-identity analysis tool, health-tourism guides, member login and support for 3 languages.',
    },
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap 5', 'Responsive', 'Multilingual'],
  },
  others: [
    {
      icon: '🏛️',
      name: { th: 'ระบบ e-Service', en: 'e-Service System' },
      description: {
        th: 'ระบบยื่นคำร้องออนไลน์สำหรับ อบต. และเทศบาล ให้ประชาชนใช้บริการได้โดยไม่ต้องเดินทาง',
        en: 'Online request system for local governments so citizens can get services without travelling.',
      },
      tags: ['PHP', 'MySQL'],
    },
    {
      icon: '💬',
      name: { th: 'แจ้งเตือนผ่าน LINE OA', en: 'LINE OA Notifications' },
      description: {
        th: 'ส่งแจ้งเตือนอัตโนมัติไปยัง LINE OA เมื่อมีคำร้องหรือข้อมูลใหม่เข้าระบบ',
        en: 'Automatic LINE OA alerts whenever new requests or data arrive.',
      },
      tags: ['LINE Messaging API', 'REST API'],
    },
    {
      icon: '✉️',
      name: { th: 'แจ้งเตือนผ่าน Email', en: 'Email Notifications' },
      description: {
        th: 'ระบบส่งอีเมลแจ้งเตือนเจ้าหน้าที่และผู้ใช้งานตามเหตุการณ์ในระบบ',
        en: 'Event-driven email alerts for staff and users.',
      },
      tags: ['PHP'],
    },
    {
      icon: '🛠️',
      name: { th: 'Back Office', en: 'Back Office' },
      description: {
        th: 'ระบบหลังบ้านสำหรับจัดการเนื้อหา ข่าวสาร และฟังก์ชันต่าง ๆ ของเว็บไซต์',
        en: 'Admin panel for managing content, news and site features.',
      },
      tags: ['CodeIgniter', 'MySQL', 'Bootstrap 5'],
    },
  ],
}

export const skills = {
  title: { th: 'ทักษะ', en: 'Skills' },
  groups: [
    { name: { th: 'Backend', en: 'Backend' }, items: ['PHP', 'CodeIgniter', 'MySQL'] },
    {
      name: { th: 'Frontend', en: 'Frontend' },
      items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Responsive Web Design'],
    },
    { name: { th: 'API & Integration', en: 'API & Integration' }, items: ['REST API', 'LINE Messaging API'] },
    {
      name: { th: 'Deployment & System', en: 'Deployment & System' },
      items: ['Git / GitHub', 'Plesk Hosting', 'Website Deployment & Migration', 'Technical Support'],
    },
    {
      name: { th: 'เครื่องมือ', en: 'Tools' },
      items: ['Figma', 'LINE OA', 'AI-Assisted Development'],
    },
  ],
}

export const education = {
  title: { th: 'การศึกษา', en: 'Education' },
  degree: { th: 'ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ', en: 'Bachelor of Information Technology' },
  school: { th: 'มหาวิทยาลัยมหาสารคาม', en: 'Mahasarakham University' },
  period: { th: 'ก.ค. 2019 – เม.ย. 2022', en: 'Jul 2019 – Apr 2022' },
}

export const contact = {
  title: { th: "มาร่วมงานกัน", en: "Let's work together" },
  subtitle: {
    th: 'สนใจร่วมงาน หรืออยากพูดคุยเรื่องโปรเจกต์ ติดต่อมาได้เลยครับ',
    en: "Open to new opportunities and projects — feel free to reach out.",
  },
}
