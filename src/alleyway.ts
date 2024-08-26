/**
 * This function is provided to prevent duplication of data in the
 * exchangeSpecific field of certain mappers. Defined globally in
 * types.ts to prevent modifying imports from original project.
 * @param obj
 * @param exclusionKeys
 */

function pruneObject<T extends object>(obj: T, exclusionKeys: ReadonlyArray<keyof T>): any {
  const result = { ...obj };
  for (const key of exclusionKeys) {
    delete result[key];
  }
  return result;
}
// Attach to global to make it global
(global as any).pruneObject = pruneObject;
export { pruneObject };
