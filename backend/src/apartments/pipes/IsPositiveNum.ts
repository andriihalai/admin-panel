import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'isPositiveNum', async: false })
export class IsPositiveNum implements ValidatorConstraintInterface {
  validate(num: number, args: ValidationArguments) {
    return num > 0; // for async validations return a Promise<boolean>
  }

  defaultMessage(args: ValidationArguments) {
    // default error message if validation failed
    return 'Number ($value) cannot be less than 0!';
  }
}