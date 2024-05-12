import React from 'react';
import TransitionLink from './TransitionLink';

const Navbar = () => {
	return (
		<nav className='flex justify-between mb-10'>
			<h1 className='text-5xl text-neutral-900 font-semibold'>Amat.</h1>
			<div className='flex gap-4'>
				<TransitionLink label='Home' href='/' />
				<TransitionLink label='About' href='/about' />
				<TransitionLink label='Contact' href='/contact' />
			</div>
		</nav>
	);
};

export default Navbar;
