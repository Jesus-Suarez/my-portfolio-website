import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
	{
		id: 1,
		title: 'My Portfolio',
		description: 'This is my portfolio',
		image: 'https://via.placeholder.com/150',
		tag:["Backend", "Frontend", "Fullstack"],
		gitUrl:'/',
		previewUrl:'/'
	},
	{
		id: 2,
		title: 'My Portfolio',
		description: 'This is my portfolio',
		image: 'https://via.placeholder.com/150',
		tag:["Backend", "Frontend", "Fullstack"],
		gitUrl:'/',
		previewUrl:'/'
	},
	{
		id: 3,
		title: 'My Portfolio',
		description: 'This is my portfolio',
		image: 'https://via.placeholder.com/150',
		tag:["Backend", "Frontend", "Fullstack"],
		gitUrl:'/',
		previewUrl:'/'
	},
	{
		id: 4,
		title: 'My Portfolio',
		description: 'This is my portfolio',
		image: 'https://via.placeholder.com/150',
		tag:["Backend", "Frontend", "Fullstack"],
		gitUrl:'/',
		previewUrl:'/'
	}
]

const ProjectSection = () => {
  return (
	<>
		<h2>
			My Projects
		  </h2>
		  <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
			  <button className='rounded-full border border-blue-500 px-6 py-3 text-xl cursor-pointer'>
				  All
			  </button>
			  <button className='rounded-full border border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>
				  Backend development
			  </button> 
		  </div>
		<div className='grid md:grid-cols-3 gap-8 md:gap-12'>
			{
				projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						tag={project.tag}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))
			}
		</div>
	</>
  )
}

export default ProjectSection;