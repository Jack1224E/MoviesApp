declare module 'deprecated-react-native-prop-types' {
    import { Validator } from 'prop-types';
  
    export const ColorPropType: Validator<any>;
    export const EdgeInsetsPropType: Validator<any>;
    export const PointPropType: Validator<any>;
  
    export const ViewPropTypes: {
      style: Validator<any>;
      // Add other ViewPropTypes properties if needed
    };
  
    // Add other exports from the package as needed
  }
  