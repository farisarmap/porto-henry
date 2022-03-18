import Link from "next/link"

import { porto } from "../source/data"
export default function Home() {
	return (
		<div className='bg-background min-h-screen pt-20 flex flex-col justify-center items-center px-14'>
			<div className='flex border-t-4 border-b-4 border-black'>
				<div className='lg:w-10/12 lg:flex lg:flex-col border-black'>
					<div className=' h-3/6 border-b-4 flex flex-col justify-around border-black'>
						<p className=' text-7xl py-1 font-bold h-20'>
							Henry Prasetyo
						</p>
						<p className=' text-4xl pb-2'>UI/UX Designer</p>
					</div>
					<div className='h-3/6 flex border-black'>
						<div className='w-3/6 flex justify-center items-center border-r-4 border-black'>
							<p className=' text-base mr-14 my-3'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Massa consequat tincidunt
								euismod sagittis, eleifend. Accumsan id mattis
								ac faucibus urna nunc, morbi. Felis, ipsum
								elementum donec mattis erat. Lacus lacus
								volutpat vel, amet.
							</p>
						</div>
						<div className=' w-1/6 border-r-4 border-black flex flex-col justify-center items-center gap-y-4'>
							<a
								href='https://www.behance.net/henryprasetyou'
								target='_blank'
								rel='noreferrer'
							>
								<div className='flex w-28 hover:cursor-pointer'>
									<img
										src='/images/jam_behance-square.svg'
										alt=''
									/>
									<p className=' pl-3'>Behance</p>
								</div>
							</a>
							<a
								href='https://www.linkedin.com/in/henry-prasetyo-69b727184/'
								target='_blank'
								rel='noreferrer'
							>
								<div className='flex w-28 hover:cursor-pointer'>
									<img src='/images/Frame 1.svg' alt='' />
									<p className=' pl-3'>LinkedIn</p>
								</div>
							</a>
							<a
								href='https://www.instagram.com/henrypras_/'
								target='_blank'
								rel='noreferrer'
							>
								<div className='flex w-28 hover:cursor-pointer'>
									<img
										src='/images/akar-icons_instagram-fill.svg'
										alt=''
									/>
									<p className='pl-3'>Instagram</p>
								</div>
							</a>
						</div>
						<div className='w-2/6 flex justify-center items-center hover:cursor-pointer'>
							<div className=' w-40 flex'>
								<img
									src='/images/line-md_external-link.svg'
									alt=''
								/>
								<p className=' pl-5'>Resume</p>
							</div>
						</div>
					</div>
				</div>
				<div className='w-2/12 flex item-center justify-center'>
					<img
						src='/images/Rectangle 1.svg'
						alt=''
						className=' object-fill'
					/>
				</div>
			</div>
			<div className='pb-12'></div>
			<div className=' grid grid-cols-4 gap-5 border-black'>
				{porto.map((el, index) => (
					<Link href={`/porto/${el.slug}`} key={el.title}>
						<div className=' hover:cursor-pointer border-l-2 h-56 border-black flex flex-col justify-around items-center w-80'>
							<img src={el.image} alt='' />
							<div className=' flex flex-col justify-center items-start'>
								<p className=' text-2xl font-bold'>
									{el.title}
								</p>
								<p className=' pt-1 text-base'>{el.type}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
