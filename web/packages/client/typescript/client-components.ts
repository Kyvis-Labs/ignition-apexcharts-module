import {ComponentMeta, ComponentRegistry} from '@inductiveautomation/perspective-client';
import { ApexChart, ApexChartMeta } from './components/ApexChart';

export {ApexChart};

import '../scss/main';

// as new components are implemented, import them, and add their meta to this array
const components: Array<ComponentMeta> = [
    new ApexChartMeta()
];

// iterate through our components, registering each one with the registry.  Don't forget to register on the Java side too!
components.forEach((c: ComponentMeta) => ComponentRegistry.register(c) );
