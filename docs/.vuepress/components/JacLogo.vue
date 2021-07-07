<template>
	<router-link :to="$localePath" class="jac-logo">
		<span class="site-name">
			<span class="site-name-text">
				discord-<span class="site-name-js">buttons</span>
			</span>
		</span>
	</router-link>
</template>

<style lang="stylus">
.jac-logo .site-name {
	background: url('/blurple-icon.png') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 100%;
	display: flex;
	align-items: center;
	font-size: 2rem;

	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}

	@media screen and (max-width: 600px) {
		text-indent: -9999px;
		padding-left: 0;
	}

	.site-name-text {
		line-height: 100%;

		.site-name-js {
			color: #5865F2
		}
	}
}

.jac-theme-red {
	.jac-logo .site-name {
		background-image: url('/red-icon.png');

		.site-name-text {

			.site-name-js {
				color: #ED4245;
			}
		}
	}
}

.jac-theme-green {
	.jac-logo .site-name {
		background-image: url('/green-icon.png');

		.site-name-text {

			.site-name-js {
				color: #57F287;
			}
		}
	}
}

.jac-theme-yellow {
	.jac-logo .site-name {
		background-image: url('/yellow-icon.png');

		.site-name-text {

			.site-name-js {
				color: #FEE75C;
			}
		}
	}
}
</style>