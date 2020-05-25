/**
 * Returns and object with `data-test-id` as key and attributeValue as
 * associated value to the key
 * @function
 * @name getDataTestAttribute
 *
 * @param {string} attributeValue
 * @returns {object}
 */
export function getDataTestAttribute(attributeValue) {
  return process.env.NODE_ENV !== "production"
    ? {
        "data-test-id": attributeValue,
      }
    : {};
}
