import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const CustomAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e6f7ff',
      100: '#b3e4ff',
      200: '#80d0ff',
      300: '#4dbcff',
      400: '#1aa8ff',
      500: '#007acc',
      600: '#0066a3',
      700: '#00527a',
      800: '#003f52',
      900: '#002a2f',
    },
  },
});

export default CustomAura;
