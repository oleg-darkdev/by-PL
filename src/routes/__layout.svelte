<script>
    import '../app.css';  
</script>


<slot />


<style>
    
  :global(.font-impact) {
          font-family: 'Impact';
            line-height: 1.2;
  }

    @font-face {
        font-family: 'Impact';
        font-style: normal;
        font-weight: 500;
        
        src: local(''),
            /* Super Modern Browsers */ url('/fonts/impact.woff') format('woff'),
            /* Modern Browsers */ url('/fonts/impact.ttf') format('truetype'),
            /* Safari, Android, iOS */ url('/fonts/impact.svg') format('svg'); /* Legacy iOS */
    }

	:global(.justify-center, section)  {
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
