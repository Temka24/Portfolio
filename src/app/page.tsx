'use client'
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import { TypeAnimation } from "react-type-animation";
import { sora } from "./font";
import Tooltip from '@mui/material/Tooltip';

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { Zoom } from "@mui/material";
import { motion } from "motion/react";


const Home: React.FC = () => {

	const [hoveredService, setHoveredService] = useState<number>(1)
	const [slectedSkill, setSlectedSkill] = useState<number | null>(0)
	const [hoveredProject, setHoveredProject] = useState<number | null>(null)

	const handleSubmit = async () => {

	}

	const websites = [
		{
			thumbnailUrl: '/proj/Screenshot (81).png',
			githubUrl: '/',
			liveUrl: '/',
			name: 'Stunning UI Portfolio'
		},
		{
			thumbnailUrl: '/proj/Screenshot (82).png',
			githubUrl: '/',
			liveUrl: '/',
			name: 'Ecommerce Platform'
		}
	]

	const skills: { name: string, imageUrl: string }[] = [
		{
			name: "React",
			imageUrl: '/logo/reactLogo.svg'
		},
		{
			name: "Next JS",
			imageUrl: '/logo/next.png'
		},
		{
			name: "TypeScript",
			imageUrl: '/logo/TypeScriptLogo.svg'
		},
		{
			name: "JavScript",
			imageUrl: '/logo/jsLogo.svg'
		},
		{
			name: "Python",
			imageUrl: '/logo/python.png'
		},
		{
			name: "Express JS",
			imageUrl: '/logo/express.svg'
		},
		{
			name: "Node JS",
			imageUrl: '/logo/node-js.png'
		},
		{
			name: "Redux toolkit",
			imageUrl: '/logo/reduxLogo.svg'
		},
		{
			name: "Tailwind CSS",
			imageUrl: '/logo/tailwind-css.svg'
		},
		{
			name: "Framer motion",
			imageUrl: '/logo/framer.png'
		},
		{
			name: "MongoDB",
			imageUrl: '/logo/mongodbLogo.svg'
		},
		{
			name: "MySQL",
			imageUrl: '/logo/mysql.png'
		},
		{
			name: "PostgreSQL",
			imageUrl: '/logo/postges.png'
		},
		{
			name: "Prisma",
			imageUrl: '/logo/prisma.webp'
		},
		{
			name: "Git & Github",
			imageUrl: '/logo/git.svg'
		},
		{
			name: "HTML",
			imageUrl: '/logo/html.svg'
		},
		{
			name: "CSS",
			imageUrl: '/logo/css3.svg'
		},
		{
			name: "Socket IO",
			imageUrl: '/logo/trans-sokcet-removebg-preview.png'
		},
		{
			name: "Material UI",
			imageUrl: '/logo/material-ui-logo-removebg-preview.png'
		},
		{
			name: "Daisy UI",
			imageUrl: '/logo/daisyLogo.png'
		},
		{
			name: "agile & scrum",
			imageUrl: "/logo/agile.svg"
		},
	]

	return (
		<>
			<div className="bg-[url(/main-bg.webp)] h-[700px] w-screen bg-center bg-cover relative">
				<div className="h-full w-screen max-w-[1600px] mx-auto relative">
					<Navbar />
					<div className="w-full h-screen max-h-[700px]">
						<Image
							src="/trees.webp"
							height={2000}
							width={2000}
							alt="tree"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="absolute top-[200px] right-0 h-[600px] w-[500px] ">
						<Image
							src="/cliff.webp"
							alt="cliff"
							height={2000}
							width={2000}
							className="w-full h-full"
						/>
					</div>
					<div className="absolute right-[300px] top-[350px] h-[200px] w-[200px]">
						<Image
							src="/horse.png"
							alt="horse"
							height={200}
							width={200}
							unoptimized
						/>
					</div>


					<div className="z-[10] absolute top-[230px] px-[90px] max-w-[1500px]">
						<p className="text-[40px] font-[700] mb-[20px]">I am Temka</p>
						<h1 className="gradientText text-[65px] leading-[70px] font-[700]">
							Web developer + <br />
							<TypeAnimation
								sequence={[
									// Same substring at the start will only be typed once, initially
									'Full-stack dev',
									1000,
									'Backend dev',
									1000,
									'UX designer',
									1000,
								]}
								speed={50}
								style={{ fontSize: '65px' }}
								repeat={Infinity}
							/>
						</h1>
						<p className={`mt-[20px] text-[20px] font-[400] ${sora.className} w-[500px]`}>
							I break down complex user experinece problems to create integritiy focused solutions that connect billions of people
						</p>
						<div className="flex flex-row items-center justify-start gap-[20px] mt-[60px]">
							<button className="border border-joke py-[13px] px-[22px] font-[500] rounded-[30px] text-[18px] text-joke hover:bg-joke hover:text-white transition-[0.3s] cursor-pointer">Download CV<GetAppIcon /></button>
							<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><GitHubIcon /></div>
							<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><InstagramIcon /></div>
							<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><LinkedInIcon /></div>
							<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><TwitterIcon /></div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#050709] pb-[100px] w-[100vw]">
				<div className="px-[90px] pt-[200px] w-screen max-w-[1600px] mx-auto relative">
					<div className="flex flex-col items-center justify-center gap-[20px]">
						<h1 className="gradientText text-[35px] font-[700]">My Quality Services</h1>
						<p className="text-[20px] w-[60%] text-center">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
					</div>

					<div className="flex flex-col items-center justify-center mt-[30px] cursor-pointer">
						<div className={`flex flex-row items-center justify-center gap-[10%] ${hoveredService === 1 ? 'bg-gradient-to-r from-[#9500ff] to-[#2a1454]' : 'bg-transparent'} py-[30px] px-[20px] rounded-[10px] border border-transparent border-b-[1px] border-b-[#2a1454]`}>
							<div className="flex flex-row items-center justify-center gap-[20px] text-[30px] font-[700]">
								<div className={`text-[20px] text-[#9500ff] ${hoveredService === 1 ? 'text-white' : ''}`}>01</div>
								<div className="text-nowrap">Web Development</div>
							</div>
							<div className="text-[17px]">I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.</div>
							<div className={`text-joke ${hoveredService === 1 ? 'rotate-0' : 'rotate-90 '} duration-[0.5s]`}><ArrowOutwardIcon sx={{ fontSize: '40px' }} /></div>
						</div>
						<div onMouseOver={() => setHoveredService(2)} onMouseOut={() => setHoveredService(1)} className={`flex flex-row items-center justify-center gap-[10%] ${hoveredService === 2 ? 'bg-gradient-to-r from-[#9500ff] to-[#2a1454]' : 'bg-transparent'} py-[30px] px-[20px] rounded-[10px] border border-transparent border-b-[1px] border-b-[#2a1454]`}>
							<div className="flex flex-row items-center justify-center gap-[20px] text-[30px] font-[700]">
								<div className={`text-[20px] text-[#9500ff] ${hoveredService === 2 ? 'text-white' : ''}`}>02</div>
								<div className="text-nowrap">Mobile Development</div>
							</div>
							<div className="ml-[-35px]">Experienced mobile developer offering innovative solutions. Proficient in creating high-performance, user-centric mobile apps. Expertise in iOS, Android, and cross-platform development.</div>
							<div className={`text-joke ${hoveredService === 2 ? 'rotate-0' : 'rotate-90 '} duration-[0.5s]`}><ArrowOutwardIcon sx={{ fontSize: '40px' }} /></div>
						</div>
						<div onMouseOver={() => setHoveredService(3)} onMouseOut={() => setHoveredService(1)} className={`flex flex-row items-center justify-center gap-[10%] ${hoveredService === 3 ? 'bg-gradient-to-r from-[#9500ff] to-[#2a1454]' : 'bg-transparent'} py-[30px] px-[20px] rounded-[10px] border border-transparent border-b-[1px] border-b-[#2a1454]`}>
							<div className="flex flex-row items-center justify-center gap-[20px] text-[30px] font-[700]">
								<div className={`text-[20px] text-[#9500ff] ${hoveredService === 3 ? 'text-white' : ''}`}>03</div>
								<div className="text-nowrap">SEO Optimisation</div>
							</div>
							<div className="ml-[5px]">My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers.</div>
							<div className={`text-joke ${hoveredService === 3 ? 'rotate-0' : 'rotate-90 '} duration-[0.5s]`}><ArrowOutwardIcon sx={{ fontSize: '40px' }} /></div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#0f0715] h-auto pb-[140px] w-[100vw]">
				<div className="pt-[80px] px-[90px] max-w-[1600px] mx-auto relative">
					<div className="flex flex-col items-center justify-center gap-[20px]">
						<h1 className="gradientText text-[35px] font-[700]">My Recent Works</h1>
						<p className="text-[20px] w-[400%] text-center">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
					</div>
					<div className="grid grid-cols-2 relative mt-[100px] pl-[70px] mx-auto gap-y-[30px] place-content-center">
						{
							websites.map((website, i: number) =>
								<div key={i} onMouseOver={() => setHoveredProject(i)} onMouseOut={() => setHoveredProject(null)} className="bg-[#140c1c] rounded-[30px] w-[550px] h-[350px] pt-[30px] px-[30px] cursor-pointer relative">
									<Image
										src={website.thumbnailUrl}
										alt="Project"
										height={350}
										width={400}
										className={`rounded-[20px] w-full h-full ${hoveredProject === i ? "blur-sm" : ""} duration-[0.3s]`}
									/>
									<div className={`absolute top-[150px] w-[80%] duration-[0.3s] ${hoveredProject === i ? 'opacity-100' : "opacity-0"}`}>
										<div className="flex flex-row items-center justify-center gap-[20px]">
											<div className="cursor-pointer rounded-[50%] px-[14px] py-[13px] text-center bg-[#2a1454] text-white transition-[0.3s] shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><Tooltip slots={{ transition: Zoom }} sx={{ "& .MuiTooltip-tooltip": { backgroundColor: 'red', color: "red" } }} title="Source Code" arrow><GitHubIcon /></Tooltip></div>
											<div className="cursor-pointer rounded-[50%] px-[14px] py-[13px] text-center bg-[#2a1454] text-white transition-[0.3s] shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><Tooltip slots={{ transition: Zoom }} title="Live Preview" arrow><LanguageIcon /></Tooltip></div>
										</div>
										<div className="bg-gradient-to-r mt-[30px] ml-[5%] rounded-[15px] from-[#9500ff] to-[#2a1454] flex flex-row w-[80%] items-center justify-between py-[20px] px-[20px]">
											<p className="font-[700] text-[20px] mt-[-10px]">{website.name}</p>
											<div><ArrowOutwardIcon /></div>
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>

			<div className="bg-[#050709] h-[700px] w-[100vw]">
				<div className="max-w-[1600px] w-screen px-[90px] flex flex-row items-start justify-center gap-[70px] pt-[100px] mx-auto relative">
					<div className="flex flex-col items-start justify-center gap-[20px] w-[45%] relative">
						<div className="flex flex-row items-center justify-center gap-[10px] text-[45px] gradientText font-[700]">
							<h1 className="text-[#9500ff]"><WorkspacePremiumIcon sx={{ fontSize: '45px' }} /></h1>
							<div>My Experience</div>
						</div>
						<div className="bg-[#140c1c] w-full px-[30px] py-[20px] rounded-[20px] mt-[30px] hover:bg-gradient-to-r from-[#9500ff] to-[#2a1454]">
							<div className="text-[#9500ff] text-[22px] font-[700]">2024 Oct. - 2024 Nov.</div>
							<div className="font-[700] text-[28px]">Interactive LLC</div>
							<div>Internship</div>
						</div>
						<div className="bg-[#140c1c] w-full px-[30px] py-[20px] rounded-[20px] hover:bg-gradient-to-r from-[#9500ff] to-[#2a1454]">
							<div className="text-[#9500ff] text-[22px] font-[700]">2025 Jan. - Present</div>
							<div className="font-[700] text-[28px]">Upwork & Fiverr.</div>
							<div>Full Stack Web Developer Freelancing</div>
						</div>
					</div>
					<div className="flex flex-col items-start justify-center gap-[20px] w-[45%]">
						<div className="flex flex-row items-center justify-start gap-[10px] text-[45px] gradientText font-[700]">
							<h1 className="text-[#9500ff]"><SchoolIcon sx={{ fontSize: '45px' }} /></h1>
							<div>My Education</div>
						</div>
						<div className="bg-[#140c1c] w-full px-[30px] py-[20px] rounded-[20px] mt-[30px] hover:bg-gradient-to-r from-[#9500ff] to-[#2a1454]">
							<div className="text-[#9500ff] text-[22px] font-[700]">2012 - 2024</div>
							<div className="font-[700] text-[28px]">High School</div>
							<div>Student</div>
						</div>
						<div className="bg-[#140c1c] w-full px-[30px] py-[20px] rounded-[20px] hover:bg-gradient-to-r from-[#9500ff] to-[#2a1454]">
							<div className="text-[#9500ff] text-[22px] font-[700]">2024 - 2028</div>
							<div className="font-[700] text-[28px]">National University Of Mongolia</div>
							<div>Computer Science</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#0f0715] pb-[100px] w-[100vw] pt-[100px]">
				<div className="mx-auto relative max-w-[1600px] w-screen px-[180px]">
					<div className="flex flex-col items-center justify-center gap-[20px]">
						<h1 className="gradientText text-[40px] font-[700]">My Skills</h1>
						<p className="text-[20px] w-[60%] text-center">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
					</div>
					<div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] mt-[40px] gap-x-[30px] gap-y-[30px] justify-center items-center">
						{
							skills.map((skill: { name: string, imageUrl: string }, i: number) =>
								<div key={i} onMouseOver={() => setSlectedSkill(i)} onMouseOut={() => setSlectedSkill(null)} className="hover:bg-joke/60 bg-[#070743] cursor-pointer rounded-[20px] bg-opacity-75 w-[170px] h-[200px] flex flex-col items-center justify-center gap-[30px] transition-[0.5s]">
									<div className="w-[70px] h-[70px]">
										<Image
											src={skill.imageUrl}
											alt="skill"
											height={60}
											width={60}
											className={`w-full h-full ${slectedSkill === i ? 'scale-[1.2]' : ''} duration-[0.3s]`}
										/>
									</div>
									<div className={`text-[17px] font-[700] ${slectedSkill === i ? ' text-white' : 'text-joke'}`}>{skill.name}</div>
								</div>
							)
						}
					</div>
				</div>
			</div>

			<div className="bg-[#050709] h-[600px] w-[100vw] pt-[100px]">
				<div className="px-[90px] flex flex-row items-start justify-center gap-[15%] w-screen max-w-[1600px] relative mx-auto">
					<div className="flex flex-col items-start justify-start gap-[15px]">
						<h1 className="gradientText font-[700] text-[40px]">Get in touch</h1>
						<ul className="w-[400px] flex flex-col gap-[10px]">
							<li role="list" className="list-disc marker:text-sky-400 text-white/50">
								We love questions and feedback - and we&apos;re always happy to help!
								Here are some ways to contact us.
							</li>
							<li role="list" className="list-disc marker:text-sky-400 text-white/50">
								Thinking about a new project, a problem to solve, or just want to connect? Let&apos;s do it!
							</li>
						</ul>
						<div className="flex flex-col items-start justify-center gap-[10px] font-[700] *:text-[20px] mt-[30px]">
							<div className="flex flex-row items-center justify-center gap-[20px] text-joke/50">
								<span className="text-joke "><PhoneIcon sx={{ fontSize: "30px" }} /></span>
								<p>Phone:  <span className="underline underline-offset-4 text-joke"> +976 959-220-72</span></p>
							</div>
							<div className="flex flex-row items-center justify-center gap-[20px] text-joke/50">
								<span className="text-joke "><EmailIcon sx={{ fontSize: "30px" }} /></span>
								<p>Email: <span className="underline underline-offset-4 text-joke"> thxdeadshotxht@gmail.com</span></p>
							</div>
							<div className="flex flex-row items-center justify-center gap-[20px] text-joke/50">
								<span className="text-joke "><GitHubIcon sx={{ fontSize: "30px" }} /></span>
								<p>GitHub: <a href="https://github.com/Temka24" className="underline underline-offset-4 text-joke"> Temka24</a></p>
							</div>
							<div className="flex flex-row items-center justify-center gap-[20px] text-joke/50">
								<span className="text-joke "><LinkedInIcon sx={{ fontSize: "30px" }} /></span>
								<p>LinkedIn: <a href="https://www.linkedin.com/in/temka-b-672929322/" className="underline underline-offset-4 text-joke">Temka B</a></p>
							</div>
						</div>
					</div>
					<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center relative min-w-[400px] gap-[25px]">
						<div className="flex flex-row items-center justify-between w-[100%] gap-[20px]">
							<input
								type="text"
								placeholder="Name"
								required
								className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px]"
							/>
							<input
								type="text"
								placeholder="Email"
								required
								className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px]"
							/>
						</div>
						<input
							type="text"
							placeholder="Subject"
							required
							className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px] w-[100%]"
						/>
						<textarea
							rows={7}
							required
							placeholder="Message"
							className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px] w-[100%]"
						/>
						<input
							type="submit"
							value="Submit"
							className="border-[2px] border-joke text-joke font-[700] rounded-[20px] px-[25px] py-[10px] self-start ml-[10%] capitalize hover:bg-gradient-to-r from-[#9500ff] via-[#2a1454] to-[#9500ff] bg-[length:300%] cursor-pointer transition-all duration-700 hover:bg-right"
						/>
					</form>
				</div>
			</div>

			<div className="bg-[#000] h-[300px] w-[100vw]">
				<div className="px-[90px] pt-[40px] w-screen relative mx-auto flex flex-col items-center justify-center gap-[30px] border border-transparent rounded-t-[100px] shadow-[0_0_10px_#2a1454] mb-0 pb-[40px]">
					<div className="h-[60px] w-[60px]">
						<Image
							src="/logo.png"
							alt="logo"
							height={100}
							width={100}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-row items-center justify-center gap-[2vw] text-[] *:font-[700] *:duration-[0.5s]">
						<a href="#home" className="cursor:pointer hover:text-joke">Home</a>
						<a href="#service" className="cursor:pointer hover:text-joke">Service</a>
						<a href="#project" className="cursor:pointer hover:text-joke">Project</a>
						<a href="#skill" className="cursor:pointer hover:text-joke">Skill</a>
						<a href="#contact" className="cursor:pointer hover:text-joke">Contact</a>
					</div>
					<div className="flex flex-row items-center justify-start gap-[20px] *:duration-[0.3w]">
						<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><GitHubIcon /></div>
						<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><InstagramIcon /></div>
						<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><LinkedInIcon /></div>
						<div className="cursor-pointer border border-joke rounded-[50%] px-[7px] py-[6px] text-joke text-center hover:bg-joke hover:text-white transition-[0.3s] hover:shadow-[0_0px_15px_#9500ff] hover:translate-y-[-2px]"><TwitterIcon /></div>
					</div>
					<div className="text-joke font-[500] text-[17px]">
						© 2024 All Rights Reserved By <a className="font-[700]" href="https://www.linkedin.com/in/temka-b-672929322/">Temuujin.in</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;