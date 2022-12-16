<script lang="ts">
	import { First_Name, Last_Name } from '$lib/stores';
	import { COMPANY } from '$lib/constants';
</script>

<div class="min-h-3/4 pt-16 pb-12 flex flex-col bg-white">
	<main
		class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
	>
		<div class="flex-shrink-0 flex justify-center">
			<a href="/" class="inline-flex">
				<span class="sr-only">{COMPANY.logo.label}</span>
				<img
					class="w-auto p-2 rounded-2xl"
					src="cleaning_glove_heart_pink.webp"
					alt={COMPANY.logo.img.alt}
				/>
			</a>
		</div>
		<div class="py-16">
			<div class="text-center">
				<p class="text-sm font-semibold text-primary-600 uppercase tracking-wide">Thank you</p>
				<h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
					{$First_Name}
					{$Last_Name}
				</h1>
				<p class="mt-2 text-base text-gray-500">We will respond as soon as possible!</p>
				<div class="mt-6">
					<a href="/" class="text-base font-medium text-accent-800 hover:text-accent-900"
						>Go back home<span aria-hidden="true"> &rarr;</span></a
					>
				</div>
			</div>
		</div>
	</main>
</div>
