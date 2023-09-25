'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
	{
		id: "skills",
		title: "skills",
		content: (
			<ul className='list-disc pl-2'>
				<li>Nodejs</li>
				<li>Express</li>
				<li>React</li>
				<li>Angular</li>
				<li>Typescript</li>
				<li>JavaScript</li>
				<li>C#</li>
			</ul>
		)
	},
	{
		id: "education",
		title: "education",
		content: (
			<ul className='list-disc pl-2'>
				<li>Universidad Tecnológica Del Valle de Toluca</li>
			</ul>
		)
	}, {
		id: "experience",
		title: "experience",
		content: (
			<ul className='list-disc pl-2'>
				<li>Palace Resorts</li>
			</ul>
		)
	},
	{
		id: "certifications",
		title: "certifications",
		content: (
			<ul className='list-disc pl-2'>
				<li>Cloud AWS Practitioner</li>
				<li>
					<a
						href="https://www.scrumstudy.com/certification/verify?type=SFC&number=886979"
						target="_blank"
						rel="noopener noreferrer"
					>
						Scrum Fundamentals Certified (SFC)
					</a>
				</li>
			</ul>
		)
	}
];

const AboutSection = () => {
	const [ tab, setTab ] = useState("skills");
	const [ isPending, startTransition ] = useTransition();

	const handleTabChange = ( id ) => {
		startTransition(() => {
			setTab(id);
		})
	}

	 return (
		 <section className='text-white'>
			 <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				 <Image src={"/images/cat.gif"} width={200} alt={200} height={200}/>
				 <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					 <h2 className='text-4xl font-bold text-white mb:4'>About Me</h2>
					 <p className='text-base lg:text-lg'>
						 I am a Software developer engineer with passion for the technology
						 and innovation. I have experience in web development
						 front-end and back-end, I have worked with lenguages like
						 JavaScript, TypeScript and C#.
						 I have experience
						 working with frameworks like React, Angular, NodeJS, Express,
					 </p>
					 <div className="flex flex-row justify-center mt-8">
						 <TabButton
							 selectTab={ () => handleTabChange("skills") }
							 active={tab === "skills"}
						 >
							 {" "}
							 Skills 
						 </TabButton>
						 <TabButton
							 selectTab={ () => handleTabChange("education") }
							 active={tab === "education"}
						 >
							 {" "}
							 Education
						 </TabButton>
						 <TabButton
							 selectTab={ () => handleTabChange("experience") }
							 active={tab === "experience"}
						 >
							 {" "}
							 Experience
						 </TabButton>
						 <TabButton
							 selectTab={ () => handleTabChange("certifications") }
							 active={tab === "certifications"}
						 >
							 {" "}
							 Certifications
						 </TabButton>
					 </div>
					 <div className='flex-row justify-start mt-8'>
						 { TAB_DATA.find(data => data.id === tab ).content }
					 </div>
				 </div>
			 </div>
		</section>
	 )
}

export default AboutSection