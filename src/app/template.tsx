'use client';

import Navbar from '@/components/Navbar';
import { animatePageIn } from '@/utils/animations';
import { Nabla } from 'next/font/google';
import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		animatePageIn();
	}, []);
	return (
		<div>
			<div
				id='banner-1'
				className='min-h-screen bg-neutral-950 z-50 fixed left-0 w-1/4'
			></div>
			<div
				id='banner-2'
				className='min-h-screen bg-neutral-950 z-50 fixed left-1/4 w-1/4'
			></div>
			<div
				id='banner-3'
				className='min-h-screen bg-neutral-950 z-50 fixed left-2/4 w-1/4'
			></div>
			<div
				id='banner-4'
				className='min-h-screen bg-neutral-950 z-50 fixed left-3/4 w-1/4'
			></div>
			<div>
				<Navbar />
				<div id='page'>{children}</div>
			</div>
		</div>
	);
}
