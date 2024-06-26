<script>
	let selected = 0;
	let items = [
		{
			title: 'Schnelle Einrichtung',
			text: 'Unsere Produkte, werden durch eine eigene API, binnen 60 Sekunden automatisiert bereitgestellt.'
		},
		{
			title: 'Eigene Hardware',
			text: 'Wir setzen 100% auf eigene Hardware und arbeiten ausschließlich mit Colocations.'
		},
		{
			title: 'DDOS Schutz',
			text: 'Wir bieten einen DDoS-Schutz, der Angriffe von bis zu 800 GBIT/s standhält.'
		}
	];
</script>

<div class="p-4">
	<div
		class="mx-auto flex flex-col sm:flex-row w-full max-w-2xl rounded-2xl bg-gradient-to-tl from-background-300/5 to-background-300 p-6"
	>
		<div class="sm:w-1/3">
			<p class="text-3xl font-bold uppercase text-primary-500">Vorteile</p>
			<div class="mt-6 flex w-full flex-col gap-4 ">
				{#each items as item, index}
					<button
						on:click={() => {
							selected = index;
						}}
						class="rounded-xl bg-background-200/30 p-3 {index == selected
							? 'ring-2'
							: ''} ring-background-200">{item.title}</button
					>
				{/each}
			</div>
		</div>
		{#key selected}
			<div class="flex mt-8 sm:mt-0 sm:w-2/3 flex-col animate-fadeIn">
				<div class="mx-auto overflow-hidden">
					{#if selected == 0}
						<svg class="w-24 " viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_7_129)">
								<path
									d="M55.5 0.249969C83.8044 0.249969 106.75 23.1954 106.75 51.5C106.75 79.8043 83.8044 102.75 55.5 102.75C27.1954 102.75 4.25 79.8043 4.25 51.5C4.25 23.1954 27.1954 0.249969 55.5 0.249969ZM55.5 20.75C52.6695 20.75 50.375 23.0445 50.375 25.875V51.5C50.375 52.8591 50.9152 54.1629 51.8761 55.1239L67.2511 70.4989C69.2524 72.5002 72.4976 72.5002 74.4989 70.4989C76.5002 68.4975 76.5002 65.2524 74.4989 63.2511L60.625 49.3772V25.875C60.625 23.0445 58.3305 20.75 55.5 20.75Z"
									fill="url(#paint0_radial_7_129)"
									shape-rendering="crispEdges"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_7_129"
									x="0.25"
									y="0.249969"
									width="110.5"
									height="110.5"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_7_129"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_7_129"
										result="shape"
									/>
								</filter>
								<radialGradient
									id="paint0_radial_7_129"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(4.74757 15.6748) rotate(38.7966) scale(117.215)"
								>
									<stop stop-color="white" stop-opacity="0.33" />
									<stop offset="0.462185" stop-color="white" stop-opacity="0.107723" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</radialGradient>
							</defs>
						</svg>
					{/if}
					{#if selected == 1}
						<svg class="w-24 " viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_22_84)">
								<path
									d="M65.625 0.416656C68.2254 0.416656 70.3333 2.52467 70.3333 5.12499V9.83332H75.0417C82.8429 9.83332 89.1667 16.1573 89.1667 23.9583V28.6667H93.875C96.4754 28.6667 98.5833 30.7747 98.5833 33.375C98.5833 35.9753 96.4754 38.0833 93.875 38.0833H89.1667V56.9167H93.875C96.4754 56.9167 98.5833 59.0246 98.5833 61.625C98.5833 64.2254 96.4754 66.3333 93.875 66.3333H89.1667V71.0417C89.1667 78.8429 82.8429 85.1667 75.0417 85.1667H70.3333V89.875C70.3333 92.4754 68.2254 94.5833 65.625 94.5833C63.0246 94.5833 60.9167 92.4754 60.9167 89.875V85.1667H42.0833V89.875C42.0833 92.4754 39.9753 94.5833 37.375 94.5833C34.7747 94.5833 32.6667 92.4754 32.6667 89.875V85.1667H27.9583C20.1573 85.1667 13.8333 78.8429 13.8333 71.0417V66.3333H9.12501C6.52469 66.3333 4.41667 64.2254 4.41667 61.625C4.41667 59.0246 6.52469 56.9167 9.12501 56.9167H13.8333V38.0833H9.12501C6.52469 38.0833 4.41667 35.9753 4.41667 33.375C4.41667 30.7747 6.52469 28.6667 9.12501 28.6667H13.8333V23.9583C13.8333 16.1573 20.1573 9.83332 27.9583 9.83332H32.6667V5.12499C32.6667 2.52467 34.7747 0.416656 37.375 0.416656C39.9753 0.416656 42.0833 2.52467 42.0833 5.12499V9.83332H60.9167V5.12499C60.9167 2.52467 63.0246 0.416656 65.625 0.416656ZM60.9167 28.6667H42.0833C36.8827 28.6667 32.6667 32.8826 32.6667 38.0833V56.9167C32.6667 62.1175 36.8827 66.3333 42.0833 66.3333H60.9167C66.1175 66.3333 70.3333 62.1175 70.3333 56.9167V38.0833C70.3333 32.8826 66.1175 28.6667 60.9167 28.6667ZM60.9167 38.0833V56.9167H42.0833V38.0833H60.9167Z"
									fill="url(#paint0_radial_22_84)"
									shape-rendering="crispEdges"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_22_84"
									x="0.416672"
									y="0.416656"
									width="102.167"
									height="102.167"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_22_84"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_22_84"
										result="shape"
									/>
								</filter>
								<radialGradient
									id="paint0_radial_22_84"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(4.87379 14.5874) rotate(38.7966) scale(107.685)"
								>
									<stop stop-color="white" stop-opacity="0.33" />
									<stop offset="0.462185" stop-color="white" stop-opacity="0.107723" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</radialGradient>
							</defs>
						</svg>
					{/if}
					{#if selected == 2}
						<svg class="w-24 " viewBox="0 0 87 95" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_22_93)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M40.4279 0.605128C42.4084 -0.137704 44.5916 -0.137704 46.5721 0.605128L77.1971 12.0895C80.6127 13.3702 82.875 16.635 82.875 20.2824V43.7441C82.875 58.6585 74.4488 72.2927 61.1089 78.9624L46.4347 86.2993C44.5872 87.2233 42.4128 87.2233 40.5653 86.2993L25.891 78.9624C12.5513 72.2927 4.125 58.6585 4.125 43.7441V20.2824C4.125 16.635 6.38753 13.3702 9.80266 12.0895L40.4279 0.605128Z"
									fill="url(#paint0_radial_22_93)"
									shape-rendering="crispEdges"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_22_93"
									x="0.125"
									y="0.0480042"
									width="86.75"
									height="94.9443"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_22_93"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_22_93"
										result="shape"
									/>
								</filter>
								<radialGradient
									id="paint0_radial_22_93"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(4.50728 13.1319) rotate(41.5914) scale(93.8456 95.4103)"
								>
									<stop stop-color="white" stop-opacity="0.33" />
									<stop offset="0.462185" stop-color="white" stop-opacity="0.107723" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</radialGradient>
							</defs>
						</svg>
					{/if}
				</div>
				<p class="mx-auto px-16 mt-2 text-center">
					{items[selected].text}
				</p>
			</div>
		{/key}
	</div>
</div>
