export type FormValues = Record<string, FormDataEntryValue>

/**
 * Collects every field in a form as a plain key/value object.
 *
 * The auth forms only log this for now — swap the `console.log` calls for a
 * real better-auth request once the authentication flow is wired up.
 */
export function collectFormData(form: HTMLFormElement): FormValues {
  return Object.fromEntries(new FormData(form).entries())
}
