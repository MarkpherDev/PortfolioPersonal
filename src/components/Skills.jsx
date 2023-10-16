import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';
import { BiLogoJavascript, BiLogoCss3, BiLogoReact } from 'react-icons/bi';
import { BsFillDatabaseFill, BsGit } from 'react-icons/bs';
import { ParallaxText } from '../utils/ParallaxText';

export const Skills = () => {
	const skills = [
		{
			name: 'HTML5',
			icon: <AiOutlineHtml5 />
		},
		{
			name: 'CSS',
			icon: <BiLogoCss3 />
		},
		{
			name: 'JavaScript',
			icon: <BiLogoJavascript />
		},
		{
			name: 'Tailwindcss',
			icon: <SiTailwindcss />
		},
		{
			name: 'ReactJS',
			icon: <BiLogoReact />
		},
		{
			name: 'MySQL',
			icon: <BsFillDatabaseFill />
		},
		{
			name: 'Git',
			icon: <BsGit />
		}
	];

	return (
		<section className='container w-full mx-auto flex px-5 py-24 flex-col items-center justify-center'>
			<h1 className='text-resaltadoRed text-5xl font-titulos pb-7'>Skills</h1>
			<div className='w-[100%] font-titulos overflow-hidden text-tamanotitulos gap-8 tracking-tight leading-3 m-0 whitespace-nowrap flex-nowrap p-6'>
				<ParallaxText baseVelocity={15}>
					{skills.map(skill => (
						<span className='flex flex-col items-center gap-2' key={skill.name}>
							<i className='text-titulos font-titulos text-[35px]'>
								{skill.icon}
							</i>
							<h1 className='text-parrafos text-tamanotitulos'>{skill.name}</h1>
						</span>
					))}
				</ParallaxText>
			</div>
		</section>
	);
};
