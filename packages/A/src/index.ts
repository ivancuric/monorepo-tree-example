import { A } from "@example/core";
export { A };

export type TypeA = typeof A;

/**
 * Would it be possible to somehow import everything and pick exports?
 */

// import * as core from "@example/core";
// export {core.A, typeof A}
