import { Dom } from './dom';

// Source: https://fonts.google.com/icons or https://github.com/google/material-design-icons
export class Icons {
	public static folderIn = 'M42.05 42.25H11.996v-7.12h17.388L6 11.746 11.546 6.2 34.93 29.584V12.196h7.12V42.25z';
	public static folderOut = 'M6 6.2h30.054v7.12H18.666L42.05 36.704l-5.546 5.546L13.12 18.866v17.388H6V6.2z';
	public static center =
		'M9 42q-1.2 0-2.1-.9Q6 40.2 6 39v-8.6h3V39h8.6v3Zm21.4 0v-3H39v-8.6h3V39q0 1.2-.9 2.1-.9.9-2.1.9ZM24 31.15q-3.15 0-5.15-2-2-2-2-5.15 0-3.15 2-5.15 2-2 5.15-2 3.15 0 5.15 2 2 2 2 5.15 0 3.15-2 5.15-2 2-5.15 2ZM6 17.6V9q0-1.2.9-2.1Q7.8 6 9 6h8.6v3H9v8.6Zm33 0V9h-8.6V6H39q1.2 0 2.1.9.9.9.9 2.1v8.6Z';
	public static zoomIn =
		'M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875ZM17.3 24.3v-4.1h-4.1v-3h4.1v-4.05h3v4.05h4.05v3H20.3v4.1Z';
	public static zoomOut =
		'M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Zm-5.1-8.35v-3H23.8v3Z';
	public static undo =
		'M14 38v-3h14.45q3.5 0 6.025-2.325Q37 30.35 37 26.9t-2.525-5.775Q31.95 18.8 28.45 18.8H13.7l5.7 5.7-2.1 2.1L8 17.3 17.3 8l2.1 2.1-5.7 5.7h14.7q4.75 0 8.175 3.2Q40 22.2 40 26.9t-3.425 7.9Q33.15 38 28.4 38Z';
	public static redo =
		'M19.6 38q-4.75 0-8.175-3.2Q8 31.6 8 26.9t3.425-7.9q3.425-3.2 8.175-3.2h14.7l-5.7-5.7L30.7 8l9.3 9.3-9.3 9.3-2.1-2.1 5.7-5.7H19.55q-3.5 0-6.025 2.325Q11 23.45 11 26.9t2.525 5.775Q16.05 35 19.55 35H34v3Z';
	public static move =
		'm24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z';
	public static delete =
		'm16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Z';
	public static folderUp =
		'M22.5 34h3V23.75l3.7 3.7 2.1-2.1-7.3-7.3-7.3 7.3 2.1 2.1 3.7-3.7ZM7.05 40q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8h14l3 3h17q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.2 40 41.05 40Zm0-29v26h34V14H22.8l-3-3H7.05Zm0 0v26Z';
	public static close =
		'm12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z';
	public static options =
		'm19.4 44-1-6.3q-.95-.35-2-.95t-1.85-1.25l-5.9 2.7L4 30l5.4-3.95q-.1-.45-.125-1.025Q9.25 24.45 9.25 24q0-.45.025-1.025T9.4 21.95L4 18l4.65-8.2 5.9 2.7q.8-.65 1.85-1.25t2-.9l1-6.35h9.2l1 6.3q.95.35 2.025.925Q32.7 11.8 33.45 12.5l5.9-2.7L44 18l-5.4 3.85q.1.5.125 1.075.025.575.025 1.075t-.025 1.05q-.025.55-.125 1.05L44 30l-4.65 8.2-5.9-2.7q-.8.65-1.825 1.275-1.025.625-2.025.925l-1 6.3ZM24 30.5q2.7 0 4.6-1.9 1.9-1.9 1.9-4.6 0-2.7-1.9-4.6-1.9-1.9-4.6-1.9-2.7 0-4.6 1.9-1.9 1.9-1.9 4.6 0 2.7 1.9 4.6 1.9 1.9 4.6 1.9Z';
	public static expand = 'M24 10v28M10 24l14 14 14-14';
	public static alert =
		'M24 42q-1.45 0-2.475-1.025Q20.5 39.95 20.5 38.5q0-1.45 1.025-2.475Q22.55 35 24 35q1.45 0 2.475 1.025Q27.5 37.05 27.5 38.5q0 1.45-1.025 2.475Q25.45 42 24 42Zm-3.5-12V6h7v24Z';
	public static play = 'M14.75 40.15V7.55l25.6 16.3Z';
	public static stop = 'M10.75 37.25V10.7H37.3v26.55Z';
	public static folder =
		'M7.05 40q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8h14l3 3h17q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.2 40 41.05 40Z';
	public static chevronUp="M24 38V10M10 24l14-14 14 14";
	public static check="M18.137 38.6 4.3 24.763l3.794-3.794 10.043 10.043 21.369-21.37 3.794 3.795L18.137 38.6z"
	public static progress="M24 8c7.83 0 14.51 5.67 15.78 13.4a3.057 3.057 0 0 0 2.98 2.6c.88 0 1.72-.39 2.29-1.06.58-.68.82-1.57.67-2.44C44 9.84 34.8 2 24 2 13.2 2 4 9.84 2.28 20.5c-.15.87.1 1.76.67 2.44.57.67 1.41 1.06 2.29 1.06a3.057 3.057 0 0 0 2.98-2.6C9.49 13.67 16.17 8 24 8zm0 0"
	public static appendPath(parent: SVGElement, pathClassName: string, d: string, size: number): SVGGElement {
		const g = Dom.svg('g');
		const scale = size / 48;
		const path = Dom.svg('path', {
			d,
			class: pathClassName,
			transform: `scale(${scale})`
		});
		g.appendChild(path);
		parent.appendChild(g);
		return g;
	}

	public static createSvg(className: string, d: string): SVGElement {
		const icon = Dom.svg('svg', {
			class: className,
			viewBox: '0 0 48 48'
		});
		const path = Dom.svg('path', {
			d,
			class: 'sqd-icon-path'
		});
		icon.appendChild(path);
		return icon;
	}
}
