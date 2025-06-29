type MyRequired<T extends (...args: unknown[]) => unknown> = T extends (...args: unknown[]) => infer R ? R : never;

