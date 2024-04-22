import { BranchedStep, SequentialStep, Step } from 'tezo-sequential-workflow-model';

export * from 'tezo-sequential-workflow-model';

/**
 * @deprecated Use {@link Step} instead.
 */
export interface TaskStep extends Step {
	componentType: 'task';
}

/**
 * @deprecated Use {@link BranchedStep} instead.
 */
export interface SwitchStep extends BranchedStep {
	componentType: 'switch';
}

/**
 * @deprecated Use {@link SequentialStep} instead.
 */
export interface ContainerStep extends SequentialStep {
	componentType: 'container';
}
