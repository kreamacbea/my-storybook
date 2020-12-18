import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'TaskComponent',
  decorators: [withTests({ results })],
};

export const defaultView = () => <div>Jest results in storybook</div>;
defaultView.parameters = {
  jest: ['task.component.test.js'],
};