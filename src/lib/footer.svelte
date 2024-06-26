<script>
	function fabian9799() {
		var shock = document.createElement('div');
		var img = new Image();
		img.src = '/spongebob.gif';
		img.style.imageRendering = 'pixelated';
		img.style.width = '374px';
		img.style.height = '375px';
		img.style.transition = '6s all';
		img.style.position = 'fixed';
		img.style.right = '-374px';
		img.style.bottom = 'calc(-50% + 320px)';
		img.style.zIndex = 999999;

		document.body.appendChild(img);

		window.setTimeout(function () {
			img.style.right = 'calc(50% - 187px)';
		}, 50);

		window.setTimeout(function () {
			img.style.right = 'calc(100% + 375px)';
		}, 4300);
		window.setTimeout(function () {
			img.parentNode.removeChild(img);
		}, 7300);
	}
</script>

<div class="w-full bg-background-400 flex flex-col gap-2 p-4">
	<div class="flex place-content-center flex-wrap gap-4">
		<a class="hover:underline underline-offset-2" href="https://cp.xelo-host.com/legal/imprint">Impressum</a>
		<a class="hover:underline underline-offset-2" href="https://cp.xelo-host.com/legal/dsgvo">Datenschutz</a>
		<a class="hover:underline underline-offset-2" href="https://cp.xelo-host.com/legal/agb">AGB</a>
		<a class="hover:underline underline-offset-2" href="https://cp.xelo-host.com/tickets">Kontakt</a>
	</div>
	<div class="flex place-content-center flex-wrap gap-4">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<p class="text-text/10">
			Xelo-Host 2023 | Design <span on:click={fabian9799}>@fabian9799</span>
		</p>
	</div>
</div>
