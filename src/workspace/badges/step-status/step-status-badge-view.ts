import { StepStatus } from 'tezo-sequential-workflow-model';
import { Icons } from '../../../core';
import { Dom } from '../../../core/dom';
import { BadgeView } from '../../component';
import { StepStatusBadgeViewConfiguration } from './step-status-badge-view-configuration';

export class StepStatusBadgeView implements BadgeView {
	public static create(parent: SVGElement, stepStatus:any, cfg: StepStatusBadgeViewConfiguration): StepStatusBadgeView{
		const g = Dom.svg('g');
        // <circle class="sqd-root-start-stop-circle" cx="15" cy="15" r="15"></circle>
		const halfOfSize = cfg.size/2 ;
		const circle = Dom.svg('circle')
        circle.setAttribute("cx",'11')
        circle.setAttribute("cy",'11')
        circle.setAttribute("r",'11')
		g.appendChild(circle);
		var icon = Icons.appendPath(g,'sqd-step-check-circle', Icons.check, cfg.iconSize);
		switch(stepStatus) { 
			case StepStatus.loaded: { 
			   g.classList.add("sqd-step-status-loaded")
			   icon.remove()
			   icon = Icons.appendPath(g, 'sqd-step-status-icon', Icons.check, cfg.iconSize);
			   break; 
			} 
            case StepStatus.loading: { 
                g.classList.add("sqd-step-status-loading")
                icon.remove()
                icon = Icons.appendPath(g, 'sqd-step-status-icon', Icons.progress, cfg.iconSize);
                break; 
             } 
			case StepStatus.error: { 
			    g.classList.add("sqd-step-status-rejected");
				icon = Icons.appendPath(g, 'sqd-step-status-icon', Icons.alert, cfg.iconSize);
			   	break; 
			} 
		 } 
		Dom.translate(icon, 5, 5);
		parent.appendChild(g);
		return new StepStatusBadgeView(parent, g, cfg.size, cfg.size);
	}

	public constructor(
		private readonly parent: SVGElement,
		public readonly g: SVGGElement,
		public readonly width: number,
		public readonly height: number
	) {}

	public destroy() {
		this.parent.removeChild(this.g);
	}
}
