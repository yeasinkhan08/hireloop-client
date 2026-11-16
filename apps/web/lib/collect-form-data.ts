export type FormValues = Record<string, FormDataEntryValue>

/**
 * Collects every field in a form as a plain key/value object.
 */
export function collectFormData(form: HTMLFormElement): FormValues {
  return Object.fromEntries(new FormData(form).entries())
}
