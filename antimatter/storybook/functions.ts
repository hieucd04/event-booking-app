export function getVariantName<T>(variants: Record<string, unknown>, possibleVariantValue: T): T
{
    return Object.keys(variants).find(key => variants[key] === possibleVariantValue) as T;
}
