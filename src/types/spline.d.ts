declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': {
      url?: string;
      style?: React.CSSProperties;
      ref?: React.Ref<any>;
      spline?: any;
    };
  }
}