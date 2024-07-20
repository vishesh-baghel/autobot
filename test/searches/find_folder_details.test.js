const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe('searches.find_folder_details', () => {
  it('should run', async () => {
    const bundle = { inputData: {} };

    const results = await appTester(
      App.searches['find_folder_details'].operation.perform,
      bundle
    );
    expect(results).toBeDefined();
    // TODO: add more assertions
  });
});
