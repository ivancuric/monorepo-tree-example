import { A } from "@example/package-a";
import { B } from "@example/package-b";

import type { TypeA } from "@example/package-a";
import type { TypeB } from "@example/package-b";

// Some assertions and assignments
const a: TypeA = A;
const b: TypeB = B;

console.log(a, b);
