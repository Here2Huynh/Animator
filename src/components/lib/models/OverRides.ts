export type AnimationOverRides = {
  duration?: number;
  timingFunc?: TimingFunc | "";
  fillMode?: FillMode;
  degrees?: number;
  iterationCount?: number | "infinite" | "";
};

type TimingFunc =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "step-start"
  | "step-end"
  | "initial"
  | "inherit"
  | "steps(int,start|end)"
  | "cubic-bezier(n,n,n,n)";

export type FillMode =
  | "none"
  | "forwards"
  | "backwards"
  | "both"
  | "initial"
  | "inherit";
