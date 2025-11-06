'use strict';

module.exports = {
  writerOpts: {
    // Sort newest first inside each section
    commitsSort: (a, b) => {
      const ad = new Date(a.committerDate || a.authorDate || 0).getTime();
      const bd = new Date(b.committerDate || b.authorDate || 0).getTime();
      return bd - ad;
    }
  }
};
