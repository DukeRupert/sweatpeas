<script lang="ts">
	import { page } from '$app/stores';
	import Item from './Item.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import { LINKS, COMPANY } from '$lib/constants';
	import { mobileMenu } from '$lib/stores';
	let pathname;
	$: ({ pathname } = $page.url);
</script>

<header>
	<div class="relative bg-white">
		<div
			class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
		>
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<div class="flex justify-start items-center lg:w-0 lg:flex-1">
					<a href="/">
						<span class="sr-only">{COMPANY.logo.label}</span>
						<img
							class="h-20 w-auto bg-evergreen-500 rounded-md"
							src={COMPANY.logo.img.src}
							alt={COMPANY.logo.img.alt}
							width={COMPANY.logo.img.width}
							height={COMPANY.logo.img.height}
						/>
					</a>
					<div class="text-center">
						<h1 class="ml-2 font-sans font-bold text-teal-400">Sweet Pea's</h1>
						<h2 class="ml-2 font-serif text-xl text-sky-800">Cleaning Services</h2>
					</div>
				</div>
			</div>
			<div class="-mr-2 -my-2 md:hidden z-10">
				<button
					type="button"
					class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-expanded="false"
					on:click={() => ($mobileMenu = !$mobileMenu)}
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<nav class="hidden md:flex space-x-10">
				{#each LINKS as { href, label }}
					<a {href} class="text-base md:text-lg !text-primary-700">
						{label}
					</a>
				{/each}
			</nav>
			<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				<a
					href={COMPANY.contact.phone.href}
					class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium !text-white hover:from-teal-300 hover:to-teal-500"
				>
					<svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>

					{COMPANY.contact.phone.string}
				</a>
			</div>
		</div>

		<div
			class="absolute top-0 inset-x-0 p-2 transition transform origin-top-left md:hidden z-30 {$mobileMenu
				? 'translate-x-0 duration-200 quint-out opacity-100'
				: 'translate-x-full duration-200 quint-in opacity-0'}"
		>
			<div
				class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
			>
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div class="flex justify-start items-center lg:w-0 lg:flex-1">
							<a href="/" on:click={() => ($mobileMenu = !$mobileMenu)}>
								<img
									class="h-16 w-auto p-1 rounded-md"
									src={COMPANY.logo.img.src}
									alt={COMPANY.logo.img.alt}
									width={COMPANY.logo.img.width}
									height={COMPANY.logo.img.height}
								/>
							</a>
							<div class="text-center">
								<h1 class="ml-2 font-sans font-bold text-teal-400">Sweet Pea's</h1>
								<h2 class="ml-2 font-serif text-xl text-sky-800">Cleaning Services</h2>
							</div>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-evergreen-500"
								on:click={() => ($mobileMenu = !$mobileMenu)}
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid grid-cols-1 gap-7">
							{#each LINKS as link}
								<Item data={link} />
							{/each}
						</nav>
					</div>
				</div>
				<div class="flex justify-center space-x-6 pt-5 pb-6 px-5 border-none">
					<SocialMedia color="text-evergreen-500" hover="hover:text-evergreen-700" />
				</div>
				<div class="py-6 px-5">
					<div class="mt-6">
						<a
							href="/contact-us"
							class="w-full whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-sky-400 to-sky-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium !text-white hover:from-sky-300 hover:to-sky-500"
							on:click={() => ($mobileMenu = !$mobileMenu)}
						>
							<svg
								class="h-6 w-6 mr-2 text-cream-500"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" /> <line x1="10" y1="14" x2="21" y2="3" />
								<path
									d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"
								/></svg
							>
							Contact Us
						</a>
						<div class="mt-6">
							<a
								href={COMPANY.contact.phone.href}
								class="w-full whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium !text-white hover:from-teal-300 hover:to-teal-500"
							>
								<svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>Call Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
