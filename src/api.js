module.exports = {
  eslint: {
    boundaries: {
      elementTypes: {
        /**
         * Creates rules for "boundaries/element-types" rule.
         *
         * @param generator - Creates element matcher from filename.
         * @param blocks - Blocks.
         * @returns Rules.
         * @deprecated
         */
        // eslint-disable-next-line deprecation/deprecation -- Ok
        createRules: (generator, ...blocks) => {
          const result = [];

          for (const [allowIndex, allowFilename] of blocks.entries())
            for (const [fromIndex, fromFilename] of blocks.entries())
              if (allowIndex < fromIndex)
                result.push({
                  allow: [generator(allowFilename)],
                  from: [generator(fromFilename)]
                });

          return result;
        }
      }
    }
  }
};
