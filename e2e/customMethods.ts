import {StepDefinitionCode, StepDefinitionOptions, Then as RealThen} from 'cucumber';

export function Then(pattern: RegExp | string, code: StepDefinitionCode, options: StepDefinitionOptions = {}): void {
  RealThen(pattern, options, code);
}
