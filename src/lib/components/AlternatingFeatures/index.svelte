<!-- AlternatingFeatures.svelte -->
<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	// Intersection oberver variables
	const threshold = 0.2;
	let elementOne: HTMLElement;
	let intersectingOne: boolean;
	let elementTwo: HTMLElement;
	let intersectingTwo: boolean;

	// Reactive assignments for transitions
	$: show1 = intersectingOne;
	$: show2 = intersectingTwo;
</script>

<div class="relative pt-16 md:pt-32 pb-32 overflow-hidden">
	<div class="relative">
		<IntersectionObserver once element={elementOne} bind:intersecting={intersectingOne} {threshold}>
			<div
				bind:this={elementTwo}
				class="transition-all transform duration-500 delay-150 ease-quart-out {show1
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12'} lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
			>
				<div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
					<div bind:this={elementOne}>
						<div>
							<span
								class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-evergreen-500 to-evergreen-500"
							>
								<!-- Icon: Ruler/Pencil -->
								<svg
									class="h-6 w-6 text-cream-500"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
									<line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
									<polyline points="12 8 7 3 3 7 8 12" /> <line x1="7" y1="8" x2="5.5" y2="9.5" />
									<polyline points="16 12 21 17 17 21 12 16" />
									<line x1="16" y1="17" x2="14.5" y2="18.5" /></svg
								>
							</span>
						</div>
						<div class="mt-6">
							<h2 class="text-4xl font-extrabold tracking-tight text-gray-900">
								Don’t worry, we’ll take care of your mess
							</h2>
							<p class="mt-4 text-lg text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie massa
								erat, sit amet faucibus felis auctor ut. Nulla magna ante, eleifend at egestas at,
								finibus non mauris. Aliquam vestibulum dolor at augue pretium blandit. Pellentesque
								at augue tellus. Quisque venenatis feugiat tortor, ut vulputate eros posuere sit
								amet. Praesent eu sem eu tellus vulputate efficitur. Maecenas et lectus convallis,
								pellentesque leo in, tincidunt odio. Morbi congue lacinia consequat.
							</p>
							<div class="mt-6">
								<a
									href="/"
									class="inline-flex bg-accent-500 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm !text-white hover:bg-accent-600"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
					<div class="mt-8 border-t border-gray-200 pt-6">
						<blockquote>
							<div>
								<p class="text-base text-gray-500">
									&ldquo;We had a great experience in working with Frank. He never cut any corners
									but was always mindful of costs so as not to exceed our budget.&rdquo;
								</p>
							</div>
							<footer class="mt-3">
								<div class="flex items-center space-x-3">
									<div class="text-base font-medium text-gray-700">
										Demetrius S. - Bonney Lake, WA
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0">
					<div
						class="pl-4 -mr-16 sm:pl-6 sm:flex sm:justify-center lg:px-0 lg:m-0 lg:relative lg:h-full"
					>
						<img
							class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							src="pink_woman_cleaning_crying.jpeg"
							alt="A woman wearing rubber gloves and holding a sponge is dirty and crying."
							height="600"
							width="900"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</div>
	<div class="mt-24">
		<IntersectionObserver once element={elementTwo} bind:intersecting={intersectingTwo} {threshold}>
			<div
				bind:this={elementTwo}
				class="transition-all transform duration-500 delay-150 ease-quart-out {show2
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12'} lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
			>
				<div
					class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
				>
					<div>
						<div>
							<span
								class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-evergreen-500 to-evergreen-500"
							>
								<!-- Heroicon name: outline/sparkles -->
								<svg
									class="h-6 w-6 text-cream-500"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="12" r="10" /> <path d="M8 14s1.5 2 4 2 4-2 4-2" />
									<line x1="9" y1="9" x2="9.01" y2="9" />
									<line x1="15" y1="9" x2="15.01" y2="9" /></svg
								>
							</span>
						</div>

						<div class="mt-6">
							<h2 class="text-3xl font-bold tracking-tight text-gray-900">Precision + Integrity</h2>
							<p class="mt-4 text-lg text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie massa
								erat, sit amet faucibus felis auctor ut. Nulla magna ante, eleifend at egestas at,
								finibus non mauris. Aliquam vestibulum dolor at augue pretium blandit. Pellentesque
								at augue tellus. Quisque venenatis feugiat tortor, ut vulputate eros posuere sit
								amet. Praesent eu sem eu tellus vulputate efficitur. Maecenas et lectus convallis,
								pellentesque leo in, tincidunt odio. Morbi congue lacinia consequat.
							</p>
							<div class="mt-6">
								<a
									href="/"
									class="inline-flex bg-white px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-600 hover:bg-gray-50"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
					<div
						class="pr-4 -ml-16 sm:pr-6 sm:flex sm:justify-center lg:px-0 lg:m-0 lg:relative lg:h-full"
					>
						<img
							class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
							src="teal_woman_cleaning_bucket.jpeg"
							alt="Excavation and leveling using a compact excavator on a residential property"
							height="600"
							width="900"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</div>
</div>
