import Differencify from 'differencify';
const differencify = new Differencify({ debug: true });
describe('tests differencify', () => {
  it('validate github page appear correctly', async () => {
    
    await differencify
      .init()
      .launch()
	  .newPage()
      .goto('https://google.com')
      .screenshot()
      .toMatchSnapshot()
      .close()
      .end();
  }, 15000);
});