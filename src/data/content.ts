export type Lang = 'th' | 'en'
export type Text = Record<Lang, string>

const base = import.meta.env.BASE_URL

export const profile = {
  name: { th: 'ภาณุพงศ์ อินทิศักดิ์', en: 'Panupong Inthisak' },
  nameLatin: 'PANUPONG INTHISAK',
  photo: `${base}my_photo.png`,
  resume: `${base}Panupong_Resume.pdf`,
  email: 'panupong3305@hotmail.com',
  github: 'https://github.com/tlein3262',
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
  { value: 3, suffix: '+', label: { th: 'ปีประสบการณ์', en: 'Years of experience' } },
]

export const about = {
  title: { th: 'เกี่ยวกับผม', en: 'About me' },
  paragraphs: [
    {
      th: 'นักพัฒนาเว็บไซต์ที่มีประสบการณ์ในการพัฒนา ติดตั้งระบบ (Deployment) ดูแลและสนับสนุนระบบ รวมถึงการย้ายระบบจากแพลตฟอร์มเดิมสู่แพลตฟอร์มใหม่ ดูแลเว็บไซต์ที่เปิดใช้งานจริงมากกว่า 240 แห่ง ใน 40 จังหวัด สำหรับโครงการภาครัฐ',
      en: 'A web developer experienced in building, deploying, supporting and migrating systems to new platforms — maintaining 240+ live websites across 40 provinces for government projects.',
    },
    {
      th: 'มีประสบการณ์ทั้ง Frontend และ Backend การเชื่อมต่อ API การทำเว็บให้รองรับทุกอุปกรณ์ และออกแบบส่วนติดต่อผู้ใช้ด้วย Figma ร่วมกับแนวคิด UX/UI',
      en: 'I work across frontend and backend, integrate APIs, build responsive sites for every device, and design interfaces in Figma with UX/UI principles in mind.',
    },
    {
      th: 'สนใจเรียนรู้และประยุกต์ใช้ภาษา Framework และเครื่องมือใหม่ ๆ อยู่เสมอ เพื่อส่งมอบซอฟต์แวร์ที่มีเสถียรภาพและพร้อมใช้งานจริง',
      en: "I'm always learning new languages, frameworks and tools to ship software that is stable and production-ready.",
    },
  ] satisfies Text[],
}

export const experience = {
  title: { th: 'ประสบการณ์ทำงาน', en: 'Work experience' },
  jobs: [
    {
      company: 'AS SYSTEM CO., LTD.',
      role: { th: 'นักพัฒนาเว็บไซต์', en: 'Web Developer' },
      start: { th: 'ก.พ. 2023', en: 'Feb 2023' },
      end: null as Text | null,
      points: [
        {
          th: 'พัฒนาและดูแลเว็บไซต์มากกว่า 240 แห่ง ใน 40 จังหวัด สำหรับองค์การบริหารส่วนตำบล (อบต.) และเทศบาล',
          en: 'Built and maintained 240+ websites across 40 provinces for Subdistrict Administrative Organizations and municipalities',
        },
        {
          th: 'พัฒนา Frontend ให้รองรับ Desktop, Tablet และ Mobile ด้วย Responsive Design โดยคำนึงถึง UX/UI',
          en: 'Developed responsive frontends for desktop, tablet and mobile with a focus on UX/UI',
        },
        {
          th: 'พัฒนาและปรับปรุงระบบ Backend และ Back Office สำหรับจัดการข้อมูลและฟังก์ชันต่าง ๆ ของเว็บไซต์',
          en: 'Built and improved backend and back-office systems for managing site content and features',
        },
        {
          th: 'พัฒนาเว็บไซต์ isanspabiz ครอบคลุมทั้ง Frontend และ Backend รองรับการใช้งานทุกอุปกรณ์',
          en: 'Developed isanspabiz end-to-end, frontend and backend, responsive on every device',
        },
        {
          th: 'พัฒนาระบบเสริม เช่น e-Service, แจ้งเตือนผ่าน LINE OA, แจ้งเตือนผ่าน Email และเครื่องมือจัดการหลังบ้าน',
          en: 'Built add-on systems: e-Service, LINE OA notifications, email notifications and admin tools',
        },
        {
          th: 'เชื่อมต่อระบบกับบริการภายนอกผ่าน REST API',
          en: 'Integrated external services through REST APIs',
        },
        {
          th: 'ติดตั้งและ Deploy เว็บไซต์บน Hosting และบริหารจัดการผ่าน Plesk',
          en: 'Deployed sites to hosting and managed them through Plesk',
        },
        {
          th: 'จัดทำคู่มือการใช้งานระบบ และให้ Technical Support แก่ผู้ใช้งานหลังเปิดให้บริการ',
          en: 'Wrote user manuals and provided technical support after launch',
        },
        {
          th: 'สนับสนุนและแก้ไขปัญหาทางเทคนิคของเว็บไซต์ที่ใช้งานจริง ตรวจสอบระบบ และประสานงานกับผู้ใช้งาน',
          en: 'Troubleshot production websites, monitored systems and coordinated with users',
        },
        {
          th: 'ดำเนินการ Migration ระบบจากแพลตฟอร์มเดิมไปยังแพลตฟอร์มใหม่ พร้อมปรับปรุงให้เหมาะกับการใช้งานปัจจุบัน',
          en: 'Migrated systems from legacy platforms to new ones, modernizing them along the way',
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
      items: ['Git / GitHub', 'Plesk Hosting', 'Deployment & Migration', 'Technical Support'],
    },
    {
      name: { th: 'เครื่องมือ', en: 'Tools' },
      items: ['Figma', 'LINE OA', 'CCTV Installation', 'AI-Assisted Development'],
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
