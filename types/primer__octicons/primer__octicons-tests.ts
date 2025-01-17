import octicons = require('@primer/octicons');
import { IconName } from '@primer/octicons';

// $ExpectType string
octicons.alert.toSVG();

// @ts-expect-error
const name: IconName = 'foo';

// @ts-expect-error
octicons.alert.heights[48];

type Removed = 'eye-slash' | 'fire' | 'no-entry-fill';

// $ExpectType true
type T0 = Removed extends IconName ? never : true;
