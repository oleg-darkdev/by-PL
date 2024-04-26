<script>
	import '../app.css';
	import DarkDevContact from '../components/DarkDevContact.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<svelte:head>
	<title>PL❤️BY</title>
</svelte:head>

<slot />

<footer class="bg-red-600">
	<div class=" py-8 px-6 flex flex-row justify-center">
		
		<DarkDevContact />
		<div class="ml-6 mr-6">
			<h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase ">O projekcie</h2>
			<ul class="text-white">
				<li class="mb-4">
					<a href="https://github.com/oleg-darkdev/by-PL" class="hover:underline"
						>GitHub repozytorium
					</a>
				</li>

				<li class="mb-4">
					<a
						href="https://github.com/oleg-darkdev/by-PL/tree/master/static/cards"
						class="hover:underline"
						>Pliki do pobrania
					</a>
				</li>

				<li class="mb-4">
					<a
						href="https://github.com/oleg-darkdev/by-PL/tree/master/static/print"
						class="hover:underline"
						>Pliki do wydrukowania
					</a>
				</li>
			</ul>
		</div>

		<div class="ml-6 mr-6">
			<h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase ">Strona główna</h2>
			<ul class="text-white">
				<li class="mb-4">
					<a href="/#history" class="hover:underline">Historia </a>
				</li>

				<li class="mb-4">
					<a href="/#culture" class="hover:underline">Kultura </a>
				</li>

				<li class="mb-4">
					<a href="/#territory" class="hover:underline">Teren </a>
				</li>

				<li class="mb-4">
					<a href="/#feast" class="hover:underline">Święta </a>
				</li>
				<li class="mb-4">
					<a href="/#faq" class="hover:underline">F.A.Q. </a>
				</li>
			</ul>
		</div>
		<div class="ml-6 mr-6">
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-200 ">Web-Aplikacja</h2>
			<ul class="text-white">
				<li class="mb-4">
					<a href="/app#history" class="hover:underline">Historia </a>
				</li>

				<li class="mb-4">
					<a href="/app#culture" class="hover:underline">Kultura </a>
				</li>

				<li class="mb-4">
					<a href="/app#territory" class="hover:underline">Teren </a>
				</li>

				<li class="mb-4">
					<a href="/app#feast" class="hover:underline">Święta </a>
				</li>
			</ul>
		</div>
		<div class="ml-6 mr-6">
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-200 ">Skontaktuj się z autorem</h2>
			<ul class="text-white">
				<li class="mb-4">
					<a href="https://github.com/oleg-darkdev" class="hover:underline">GitHub </a>
				</li>
				<li class="mb-4">
					<a
						href="https://www.linkedin.com/in/oleg-darkdev?original_referer=https%3A%2F%2Flinktr.ee%2F"
						class="hover:underline"
						>Linkedin
					</a>
				</li>
				<li class="mb-4">
					<a href="https://www.facebook.com/hulio.mondre" class="hover:underline">Facebook </a>
				</li>

				<li class="mb-4">
					<a href="https://linktr.ee/darkdev" class="hover:underline">Linktr.ee </a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	:global(.font-impact) {
		font-family: 'Impact';
		line-height: 1.2;
	}

	@font-face {
		font-family: 'Impact';
		font-style: normal;
		font-weight: 500;

		src: local(''), /* Super Modern Browsers */ url('/fonts/impact.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/impact.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/impact.svg') format('svg'); /* Legacy iOS */
	}

	:global(.justify-center, section) {
		display: flex;
		justify-content: center;
	}

	:global(.bg) {
		background-repeat: no-repeat;
		background-position: center;
	}

	:global(body, html) {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	@media (min-width: 1024px) {
		:global(.bg-image-wrap) {
			min-height: 100vh;
		}

		/* categories */
		:global(.history) {
			background-image: url(/images/bg/history.svg);
		}
		:global(.culture) {
			background-image: url(/images/bg/culture.svg);
		}
		:global(.territory) {
			background-image: url(/images/bg/territory.svg);
		}
		:global(.feast) {
			background-image: url(/images/bg/feast.svg);
		}
	}
</style>
