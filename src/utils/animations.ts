import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = () => {
	const bannerOne = document.getElementById('banner-1');
	const bannerTwo = document.getElementById('banner-2');
	const bannerThree = document.getElementById('banner-3');
	const bannerFour = document.getElementById('banner-4');
	const page = document.getElementById('page');

	if (bannerOne && bannerTwo && bannerThree && bannerFour && page) {
		const tl = gsap.timeline();

		tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: 0 })
			.set(page, { y: 30, opacity: 0 })
			.to([bannerOne, bannerTwo, bannerThree, bannerFour], {
				yPercent: 100,
				stagger: 0.2,
			})
			.to(page, { y: 0, opacity: 1, duration: 1 }, '<');
	}
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
	const bannerOne = document.getElementById('banner-1');
	const bannerTwo = document.getElementById('banner-2');
	const bannerThree = document.getElementById('banner-3');
	const bannerFour = document.getElementById('banner-4');
	const page = document.getElementById('page');

	if (bannerOne && bannerTwo && bannerThree && bannerFour && page) {
		const tl = gsap.timeline();

		tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: -100 })
			.to([bannerOne, bannerTwo, bannerThree, bannerFour], {
				yPercent: 0,
				stagger: 0.2,
				onComplete: () => {
					router.push(href);
				},
			})
			.fromTo(
				page,
				{ y: 0, opacity: 1 },
				{ y: 30, opacity: 0, duration: 1 },
				'<'
			);
	}
};
