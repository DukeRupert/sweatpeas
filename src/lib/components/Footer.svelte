<!-- footer.svelte -->
<script lang="ts">
	import { COMPANY, LINKS } from '$lib/constants';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
</script>

<footer class="bg-gray-50">
	<div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
			{#each LINKS as { href, label }}
				<div class="px-5 py-2">
					<a {href} class="text-base text-gray-500 hover:text-gray-700"> {label} </a>
				</div>
			{/each}
		</nav>
		<div class="mt-8 flex justify-center space-x-6">
			<SocialMedia
				size={{ height: 6, width: 6 }}
				color="text-gray-500"
				hover="hover:text-gray-600"
			/>
		</div>
		<a
			href={COMPANY.contact.phone.href}
			class="mt-8 flex mx-auto items-center justify-center text-center text-base text-evergreen-500"
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
		<p class="mt-8 text-center text-base text-gray-500">
			&copy; 2020 Sweat Pea's Cleaning Services, LLC. All rights reserved.
		</p>
		<a href="https://www.firefly.llc">
			<p class="mt-8 text-center text-base text-gray-500">
				Design by <span class="text-blue-600 hover:text-blue-700">Firefly Software</span>
			</p>
		</a>
	</div>
</footer>
