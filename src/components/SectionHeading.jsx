import { motion } from 'framer-motion';
export default function SectionHeading({eyebrow, title, text}) {
  return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.65}} className="max-w-2xl mb-12">
    <div className="eyebrow">{eyebrow}</div>
    <h2 className="section-title">{title}</h2>
    {text && <p className="section-copy">{text}</p>}
  </motion.div>
}