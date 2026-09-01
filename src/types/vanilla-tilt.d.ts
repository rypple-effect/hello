declare module "vanilla-tilt" {
  interface VanillaTiltOptions {
    max?: number;
    speed?: number;
    perspective?: number;
    scale?: number;
    glare?: boolean;
    "max-glare"?: number;
    reverse?: boolean;
    easing?: string;
    reset?: boolean;
    [key: string]: unknown;
  }

  interface VanillaTiltInstance {
    destroy: () => void;
  }

  interface VanillaTiltStatic {
    init: (
      elements: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
      options?: VanillaTiltOptions
    ) => void;
  }

  const VanillaTilt: VanillaTiltStatic;
  export default VanillaTilt;
}

declare global {
  interface HTMLElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}

export {};
