import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPhp, FaWordpress, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa'
import { SiJavascript, SiGatsby, SiCodeigniter, SiMysql, SiAdobephotoshop, SiAdobepremiere } from 'react-icons/si'
import { GiCheckMark } from 'react-icons/gi'

export const tools = [
        {icon: (<FaHtml5 />), title: "HTML", label:"html" },
        {icon: (<FaCss3Alt />), title: "CSS", label:"css" },
        {icon: (<SiJavascript />), title: "JavaScript", label:"javascript" },
        {icon: (<FaReact />), title: "React", label:"react" },
        {icon: (<FaBootstrap />), title: "Bootstrap", label:"bootstrap" },
        {icon: (<SiGatsby />), title: "Gatsby", label:"gatsby" },
        {icon: (<FaPhp />), title: "PHP", label:"php" },
        {icon: (<SiCodeigniter />), title: "CodeIgniter", label:"codeigniter" },
        {icon: (<SiMysql />), title: "MySQL", label:"mysql" },
        {icon: (<FaWordpress />), title: "Wordpress", label:"wordpress" },
        {icon: (<FaGitAlt />), title: "Git", label:"git" },
        {icon: (<FaGithub />), title: "GitHub", label:"github" },
        {icon: (<FaNpm />), title: "NPM", label:"npm" },
        {icon: (<SiAdobephotoshop />), title: "Photoshop", label:"photoshop" },
        {icon: (<SiAdobepremiere />), title: "Premiere Pro", label:"premiere pro" },
]

export const skills = [
        {icon: (<GiCheckMark />), text:"Great ability to learn quickly and adapt to changing methods and environment." },
        {icon: (<GiCheckMark />), text:"Excellent human relations." },
        {icon: (<GiCheckMark />), text:"Reliable, organized and punctual." },
        {icon: (<GiCheckMark />), text:"Extreme eager to learn." },
        // {icon: (<GiCheckMark />), text:"" },
]