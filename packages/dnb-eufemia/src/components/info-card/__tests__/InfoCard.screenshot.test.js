/**
 * Screenshot Test
 * This file will not run on "test:staged" because we don't require any related files
 */

 import {
  testPageScreenshot,
  setupPageScreenshot,
} from '../../../core/jest/jestSetupScreenshots'

describe('InfoCard screenshot', () => {
  setupPageScreenshot({ url: '/uilib/components/info-card/demos' })

    it('renders correct default component', async () => {
      const screenshot = await testPageScreenshot({
        selector: '[data-visual-test="info-card-basic"] .dnb-info-card',
      })
      expect(screenshot).toMatchImageSnapshot()
    })
    it('renders correct component with title and buttons', async () => {
      const screenshot = await testPageScreenshot({
        selector: '[data-visual-test="info-card-buttons"] .dnb-info-card',
      })
      expect(screenshot).toMatchImageSnapshot()
    })
    it('renders the centered component', async () => {
      const screenshot = await testPageScreenshot({
        selector: '[data-visual-test="info-card-buttons-centered"] .dnb-info-card',
      })
      expect(screenshot).toMatchImageSnapshot()
    })
    it('renders with custom icon', async () => {
      const screenshot = await testPageScreenshot({
        selector: '[data-visual-test="info-card-custom-icon"] .dnb-info-card',
      })
      expect(screenshot).toMatchImageSnapshot()
    })
    
 
})