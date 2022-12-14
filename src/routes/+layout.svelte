<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar/index.svelte';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Navbar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="lg:relative">
		<slot />
	</main>
</AppShell>
