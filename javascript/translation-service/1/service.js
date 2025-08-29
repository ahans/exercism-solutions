/// <reference path="./global.d.ts" />
// @ts-check

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text).then((result) => result.translation);
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }
    
    let promises = [];
    for (const text of texts) {
      promises.push(this.api.fetch(text));
    }
    return Promise.all(promises).then(
      (values) => values.map((v) => v.translation)
    );
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    const throwIfError = (value) => {
      if (value instanceof Error) {
        throw value;
      }
    };
    
    const apiRequest =
      new Promise((resolve, reject) => this.api.request(text, resolve)
        ).then(throwIfError).catch((error) =>
            new Promise((resolve, reject) => this.api.request(text, resolve))
        ).then(throwIfError).catch((error) =>
            new Promise((resolve, reject) => this.api.request(text, resolve))).then(throwIfError);
    return apiRequest;
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
    const checkMinimumQuality = (result) => {
      if (result.quality < minimumQuality) {
        throw new QualityThresholdNotMet();
      }
      return result.translation;
    };

    const tryFetch = () => this.api.fetch(text).then(checkMinimumQuality);

    return tryFetch()
      .catch((error) => {
        if (error instanceof QualityThresholdNotMet) throw error;
        return this.request(text);
      }).then(tryFetch);
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
