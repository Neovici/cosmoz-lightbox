import { html } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import { Video } from '../types';
import { loaded$, uri$ } from '../util';

export const video = (v: Video) => {
	const uri = uri$(v.uri);
	const { autoplay = false, controls = true, muted = false, poster } = v;

	return html`
		<video
			class="viewable video"
			src=${until(uri)}
			?autoplay=${autoplay}
			?controls=${controls}
			?muted=${muted}
			poster=${poster || ''}
			?data-loaded=${loaded$(uri)}
		>
			Your browser does not support the video element.
		</video>
	`;
};
