import { Step } from '../../../definition';
import { ComponentContext } from '../../../component-context';
import { BadgeExtension, StepContext } from '../../../designer-extension';
import { Badge } from '../../component';
import { StepStatusBadgeExtensionConfiguration } from './step-status-badge-extension-configuration';
import { StepStatusBadge } from './step-status-badge';



const defaultConfiguration: StepStatusBadgeExtensionConfiguration = {
	view: {
		size: 22,
		iconSize: 12
	}
};

export class StepStatusBadgeExtension implements BadgeExtension {
	public static create(configuration?: StepStatusBadgeExtensionConfiguration): StepStatusBadgeExtension {
		return new StepStatusBadgeExtension(configuration ?? defaultConfiguration);
	}

	public readonly id = 'StepStatus';

	private constructor(private readonly configuration: StepStatusBadgeExtensionConfiguration) {}

	public createForStep(parentElement: SVGElement, stepContext: StepContext<Step>, componentContext: ComponentContext): Badge {
		return StepStatusBadge.createForStep(parentElement, stepContext, componentContext, this.configuration.view);
	}

	public readonly createStartValue = () => true;
}
