import { ComponentContext } from '../../../component-context';
import { StepContext } from '../../../designer-extension';
import { Badge } from '../../component';
import { StepStatusBadgeView } from './step-status-badge-view';
import { StepStatusBadgeViewConfiguration } from './step-status-badge-view-configuration';


export class StepStatusBadge implements Badge {
    public static createForStep(
        parentElement: SVGElement,
        stepContext: StepContext,
        componentContext: ComponentContext,
        configuration: StepStatusBadgeViewConfiguration
    ): StepStatusBadge {
        const stepStatus = stepContext.step.stepStatus
        return new StepStatusBadge(parentElement, stepContext, componentContext, stepStatus, configuration);
    }



    public view: StepStatusBadgeView | null = null;

    private constructor(
        
        private readonly parentElement: SVGElement,
        private stepContext: StepContext,
        private readonly componentContext: ComponentContext,
        private readonly stepStatus: any,
        private readonly configuration: StepStatusBadgeViewConfiguration
    ) { }

    public update(result: unknown): unknown {
        const isValid = this.componentContext.validator.validateStep(this.stepContext.step, this.stepContext.parentSequence)
        if (isValid && this.stepStatus != undefined) {
            if (this.view) {
                this.view.destroy();
                this.view = null;
            } 
            else {
                this.view = StepStatusBadgeView.create(this.parentElement, this.stepStatus, this.configuration);
            }
        }
        return isValid && result;
    }

    public resolveClick(): null {
        return null;
    }
}
