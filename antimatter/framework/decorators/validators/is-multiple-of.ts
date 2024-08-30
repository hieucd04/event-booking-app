import {registerDecorator, ValidationArguments} from "class-validator";
import {ErrorMessage} from "../../consts";

export function IsMultipleOf(otherPropertyName: string)
{
    return function (objectContainingThisProperty: object, thisPropertyName: string): void
    {
        registerDecorator({
            name: "IsMultipleOf",
            target: objectContainingThisProperty.constructor,
            propertyName: thisPropertyName,
            constraints: [otherPropertyName],
            validator: {
                validate(thisPropertyValue: unknown, validationArguments: ValidationArguments)
                {
                    const otherPropertyValue = (validationArguments.object as Record<string, unknown>)[otherPropertyName];
                    if (typeof thisPropertyValue !== "number" || typeof otherPropertyValue !== "number")
                    {
                        return false;
                    }

                    let wholeNumberThisPropertyValue = thisPropertyValue;
                    let wholeNumberOtherPropertyValue = otherPropertyValue;
                    while (!Number.isInteger(wholeNumberThisPropertyValue) || !Number.isInteger(wholeNumberOtherPropertyValue))
                    {
                        wholeNumberThisPropertyValue *= 10;
                        wholeNumberOtherPropertyValue *= 10;
                    }

                    return wholeNumberThisPropertyValue % wholeNumberOtherPropertyValue === 0;
                },

                defaultMessage() { return ErrorMessage.PropsValidation.MustBeMultipleOf; }
            }
        });
    };
}
