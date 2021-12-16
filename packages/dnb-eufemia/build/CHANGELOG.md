# Changelog

All notable changes to @dnb/eufemia will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.18.0](https://github.com/dnbexperience/eufemia/compare/v9.17.2...v9.18.0) (2021-12-16)


### Bug Fixes

* **InputMasked:** inherit of provider/context props ([89db309](https://github.com/dnbexperience/eufemia/commit/89db309fd0d09f125c3d66ff9e745a12fbfb6ed2))
* **Modal:** Convert to TypeScript ([#1177](https://github.com/dnbexperience/eufemia/issues/1177)) ([b832b29](https://github.com/dnbexperience/eufemia/commit/b832b29c401d6c1d8f1e9bb36eadbcac984bd330))
* **StepIndicator:** enhance NVDA support by omitting click event ([74ae87c](https://github.com/dnbexperience/eufemia/commit/74ae87ca601ac3f004518d6c5b6fd34ca8d5a439))


### Features

* **Tag:** add new tag component ([dec57cb](https://github.com/dnbexperience/eufemia/commit/dec57cb8ded032b70b15a1b479d5cdc9782e0528))

## [9.17.2](https://github.com/dnbexperience/eufemia/compare/v9.17.1...v9.17.2) (2021-12-15)


### Bug Fixes

* fix Modal DOM attribute cleanup during close when open_state is used ([28d14ae](https://github.com/dnbexperience/eufemia/commit/28d14aefa71d8af3a20126979ccd93d3b4c2930e))
* **InputMasked:** allow leading zero when custom mask is given ([d3ecada](https://github.com/dnbexperience/eufemia/commit/d3ecadae0ef86dc108840a833a2476cfd064dc9e))

## [9.17.1](https://github.com/dnbexperience/eufemia/compare/v9.17.0...v9.17.1) (2021-12-14)


### Bug Fixes

* fix bug in InputMasked without maskParams ([12eda1d](https://github.com/dnbexperience/eufemia/commit/12eda1de6dca60f2ad2379307be7e47aaeacf870))

# [9.17.0](https://github.com/dnbexperience/eufemia/compare/v9.16.3...v9.17.0) (2021-12-07)


### Bug Fixes

* **Breadcrumb:** Spacing prop + contrast colors ([29dd469](https://github.com/dnbexperience/eufemia/commit/29dd4692cc1cb142cb7d49f031ef59aed6453169))
* **Button:** fix margin on tertiary button multiline ([f332154](https://github.com/dnbexperience/eufemia/commit/f332154279f724de7bbacf94000681f04b4f45e5))
* enhance type generation when using Button.propTypes instead of buttonPropTypes ([6c81db7](https://github.com/dnbexperience/eufemia/commit/6c81db7b88f19238a99568ed2616c7505fcb9db3))
* fix re-render issue with ToggleButtons ([6507e0f](https://github.com/dnbexperience/eufemia/commit/6507e0fb18bb970c4772a292153b64310808bb85))
* **InputMasked:** only use inputmode=numeric/decimal when safe to use ([01f95e0](https://github.com/dnbexperience/eufemia/commit/01f95e034e67290acebd6888942ff6bea1cb73fd))
* **Input:** use emerald-green on focus border color ([a7fdcba](https://github.com/dnbexperience/eufemia/commit/a7fdcba6b0ba5b78953aad4ee154106c32e548cc))
* **Modal:** enhance Modal performance ([cff5e00](https://github.com/dnbexperience/eufemia/commit/cff5e00d80550b273df69965a50884d68dfd08e0))
* **StepIndicator:** fix TypeScript private event emitter warning ([cee529d](https://github.com/dnbexperience/eufemia/commit/cee529d742dab37c44c671b23e53c055e91ef560))
* **StepIndicator:** show skeleton during SSR if no data is given to Sidebar ([696d209](https://github.com/dnbexperience/eufemia/commit/696d2098f2839c02707ceb39e328bc99e056b389))


### Features

* add icons: facebook, linkedin, instagram and tag ([7fa3da1](https://github.com/dnbexperience/eufemia/commit/7fa3da1e973a7f2c6de5fb40bb3c23252bd27280))
* **GlobalStatus:** New design ([88630ec](https://github.com/dnbexperience/eufemia/commit/88630ece7c88a94b8234e305cc139f2b713d7ce1))

## [9.16.3](https://github.com/dnbexperience/eufemia/compare/v9.16.2...v9.16.3) (2021-11-22)


### Bug Fixes

* fix pagination indicator and load button issue ([c672251](https://github.com/dnbexperience/eufemia/commit/c6722514d990603d5ebf350bf6bda6da1ccf7141))
* **InputMasked:** enhance handling of decimals with a following zero ([6ed6e75](https://github.com/dnbexperience/eufemia/commit/6ed6e7565d46b60c010c05686e67f07abead60d4))
* **InputMasked:** fix Android keyCode issue by using the keypress event ([0028e6f](https://github.com/dnbexperience/eufemia/commit/0028e6fd8c1d625d6b5576fcc15dfca8ed2d6de1))
* **Tabs:** Larger spacing to line + changed focus design ([3f093e6](https://github.com/dnbexperience/eufemia/commit/3f093e6ed79971301d91bf556e6d7e129a3e658f))

## [9.16.2](https://github.com/dnbexperience/eufemia/compare/v9.16.1...v9.16.2) (2021-11-20)


### Bug Fixes

* **Breadcrumb:** Remove padding on left and right side ([903cb34](https://github.com/dnbexperience/eufemia/commit/903cb34950b4c3366f314f03832bbd3924ded0e0))
* **InputMasked:** fix show_mask and use invisible guide char by default ([92fd07b](https://github.com/dnbexperience/eufemia/commit/92fd07bc26783906303ec593187f98957c7f28f5))
* **NumberFormat:** types for NumberUtils ([#1141](https://github.com/dnbexperience/eufemia/issues/1141)) ([293cc20](https://github.com/dnbexperience/eufemia/commit/293cc20fd9b5f71269a157b68358b8b5b99d7450))
* **Section:** Text color on --fire-red-8 ([7901667](https://github.com/dnbexperience/eufemia/commit/79016672aae9f04f4aeb188f152c95e33b2c8f56))
* **StepIndicator:** Update triggerbutton icon to chevron_down ([b6ef50b](https://github.com/dnbexperience/eufemia/commit/b6ef50b5145561e6663a69114d4dc9238a6d7478))
* Update icon size on button tertiary ([8e8b8ab](https://github.com/dnbexperience/eufemia/commit/8e8b8ab19ac2e0bdcb6478f00c882c9af8ebbcc2))

## [9.16.1](https://github.com/dnbexperience/eufemia/compare/v9.16.0...v9.16.1) (2021-11-16)


### Bug Fixes

* **Breadcrumb:** fix usage of tsx file in /cjs – which is used when running Jest tests ([7787929](https://github.com/dnbexperience/eufemia/commit/7787929e95492a5c408de0f1b2cd8ee05248032a))
* fix Circular dependency imports (reported by rollup, UMD build) ([37c70b2](https://github.com/dnbexperience/eufemia/commit/37c70b29e89872e6963042eb348cea2e0eab742d))
* **InputMasked:** fix manual range selection ([a2a1a98](https://github.com/dnbexperience/eufemia/commit/a2a1a98096e31f109e6037c8a81abbd149787652))
* **InputMasked:** fix misplaced leading zero while typing ([a40e6a0](https://github.com/dnbexperience/eufemia/commit/a40e6a09848471dce04cfd7b5f189d6ff0c50e26))
* **InputMasked:** handle initial empty string value ([70c5fd8](https://github.com/dnbexperience/eufemia/commit/70c5fd853b4e3d36fdc62a87a8301ec01c518f47))
* **Modal:** text selection issue after modal has been closed ([a1a612b](https://github.com/dnbexperience/eufemia/commit/a1a612bd94231d1c0b92e8b0caab6b07d0e13ea6))

# [9.16.0](https://github.com/dnbexperience/eufemia/compare/v9.15.2...v9.16.0) (2021-11-15)


### Bug Fixes

* **Autocomplete:** fix wrong on_change reset event call ([abd9bdd](https://github.com/dnbexperience/eufemia/commit/abd9bdda3eb9f13c265698ed8f09c9d1c17472ef))
* **Autocomplete:** take updated data in account when changing the index value ([c0c16f5](https://github.com/dnbexperience/eufemia/commit/c0c16f542802cad0261ce2898f3f142341fc72a7))
* fix Breadcrumb Storybook Docgen issue ([130405d](https://github.com/dnbexperience/eufemia/commit/130405dd405abb1e99e131dcbd26e40e5680b378))
* make Section z-index handling more robust ([6d46b81](https://github.com/dnbexperience/eufemia/commit/6d46b81831893c3942384f080f6b7e54c88c3249))
* Modal without spacing bug ([4dfc51f](https://github.com/dnbexperience/eufemia/commit/4dfc51fb32f4f7fd7e3981be0cd3594b37d09f7e))
* set default text color in Section component ([0a10427](https://github.com/dnbexperience/eufemia/commit/0a104275fce89ae6745efffda6f3c59a4b068acf))
* **StepIndicator:** fix item click event forwarding ([22fa411](https://github.com/dnbexperience/eufemia/commit/22fa4111e4e43b7bd9eaec542d7c3bd91df0384a))


### Features

* add cloud* icons ([05cddbd](https://github.com/dnbexperience/eufemia/commit/05cddbdb35cf6ce7ada55190162891565242b0aa))
* add tab_element property to allow tabs use Gatsby Link as the element ([837a7a8](https://github.com/dnbexperience/eufemia/commit/837a7a897c811676d523637e119dcdb29b826f80))
* **Breadcrumb:** Added new component! ([491dc54](https://github.com/dnbexperience/eufemia/commit/491dc54a5512128f8e1c24357356853843266a50))
* **Section:** add transparent as a style type ([ab2e6fc](https://github.com/dnbexperience/eufemia/commit/ab2e6fc0ac17baca06b56a0cfc1206001186de55))

## [9.15.2](https://github.com/dnbexperience/eufemia/compare/v9.15.1...v9.15.2) (2021-11-02)


### Bug Fixes

* **GlobalStatus:** fix FormStatus auto generation of IDs (item_id) ([e449427](https://github.com/dnbexperience/eufemia/commit/e449427c0fbfc60308cc7524f4e43b2095bd9991))

## [9.15.1](https://github.com/dnbexperience/eufemia/compare/v9.15.0...v9.15.1) (2021-11-01)


### Bug Fixes

* **InputMasked:** change value when leading zero is 0 initially ([04cca2e](https://github.com/dnbexperience/eufemia/commit/04cca2e18211dc531c31bcf1d53d2633c88d3e9d))
* test build stage and provide cjs build with correct type in a custom package.json ([82794f7](https://github.com/dnbexperience/eufemia/commit/82794f72e9a1d968f6168210fd2c8fbd53df3881))

# [9.15.0](https://github.com/dnbexperience/eufemia/compare/v9.14.0...v9.15.0) (2021-10-28)


### Bug Fixes

* **Autocomplete:** fix updateData when selected_key changes ([90f8b05](https://github.com/dnbexperience/eufemia/commit/90f8b050bdb3c375cb5e0186a72d6f376e1a3cd5))
* **TypeScript:** fix export of type definitions ([ff1e603](https://github.com/dnbexperience/eufemia/commit/ff1e603d757dda67c381b482355169a8013400d6)), closes [#1075](https://github.com/dnbexperience/eufemia/issues/1075)


### Features

* **Icons:** new icons: oil, fridge, factory, chip, charger, brickwall ([218315a](https://github.com/dnbexperience/eufemia/commit/218315aca050ecce46f66f2963d94172848bdf80))

# [9.14.0](https://github.com/dnbexperience/eufemia/compare/v9.13.1...v9.14.0) (2021-10-28)


### Bug Fixes

* Fix bug where cleanNumber returns void in TS ([3165759](https://github.com/dnbexperience/eufemia/commit/3165759fddb58f3ce6135a10f167e138b9de0b3d))
* **Typography:** make docs more clear about the values used in typographic elements ([459b08c](https://github.com/dnbexperience/eufemia/commit/459b08c8cb973e1f46f2e5f79be267fe9e446464))
* Add default shadow to properties and apply to payment-card ([66fbc6e](https://github.com/dnbexperience/eufemia/commit/66fbc6e4bc3a1952dbbd8b7e7c08083bece511b0))
* add screen-reader only button to show autocomplete options ([a8b4eab](https://github.com/dnbexperience/eufemia/commit/a8b4eab5e27c7e4f9c5f2d63a4a03b678937cce8))
* add show_clear_button property to Autocomplete ([b389689](https://github.com/dnbexperience/eufemia/commit/b3896894706ebded51c1a958802263ab182548bb))
* add support to forwards locale from a FormRow or FormSet ([9342eb2](https://github.com/dnbexperience/eufemia/commit/9342eb2303771709ef424d2f27cc459610727258))
* enhance selections and event calls when autocomplete value gets removed ([a79291c](https://github.com/dnbexperience/eufemia/commit/a79291c6a8c818643869de31849e034bf49cb339)), closes [#1021](https://github.com/dnbexperience/eufemia/issues/1021)
* fix Autocomplete on input blur when onBlur is used instead of on_blur ([0c92414](https://github.com/dnbexperience/eufemia/commit/0c924140a62ac9434e3c1f3339811161d515cd99))
* fix TS Type import statement duplication issue – happen with the Modal component ([244a6c4](https://github.com/dnbexperience/eufemia/commit/244a6c44828e7829907b980e6117def9032e03ca))
* **InputMasked:** improve overall user typing experience ([ec7700c](https://github.com/dnbexperience/eufemia/commit/ec7700c843068f52218228b0d302d05209bbd25a))
* enhance GlobalStatus animation to adjust on content changes ([291f046](https://github.com/dnbexperience/eufemia/commit/291f04642838ce894c50c7d357c9eb6a064dde15))
* fix correct amount FormStatus / GlobalStatus messages to show up ([63d04ee](https://github.com/dnbexperience/eufemia/commit/63d04eeba39f17e44e12198603594f2889c4cbcc))
* fix FormLabel sr-only to be more robust ([20bb13a](https://github.com/dnbexperience/eufemia/commit/20bb13a1645d1f6f561302a871c6e1cb934ff276))
* fix NumberFormat copy value to include currency and percent sign by default ([8741203](https://github.com/dnbexperience/eufemia/commit/874120366c4e48902e8a6f734f7efcc64542350e))
* fix onClick TS Type ([e526f9a](https://github.com/dnbexperience/eufemia/commit/e526f9a4dc784a9b02dd0c058d0c0df5ce0f0460))
* fix support for components inside labels to show up in GlobalStatus ([f43d14d](https://github.com/dnbexperience/eufemia/commit/f43d14d9e4886548b7208590df5f40a0a2b2addd))
* GlobalStatus warnings when running tests ([7ef882f](https://github.com/dnbexperience/eufemia/commit/7ef882f6285be139119b69b392ebf11371e9d5ca))
* make cache_hash of DrawerList optional ([dc22215](https://github.com/dnbexperience/eufemia/commit/dc222156f6710be41876bcda0fe20a0e4e02059b))
* refactor GlobalStatus markup to use sea-green section + enhance animation UX ([67c53ec](https://github.com/dnbexperience/eufemia/commit/67c53ec8dcef9f575f224d2394474f05d684e876))
* set data-dnb-drawer-list-active with id on HTML ([c99f984](https://github.com/dnbexperience/eufemia/commit/c99f98481dcc9ae0e8759eaf04701a9031471cc3))
* small spelling mistake in ProgressIndicator test ([0100853](https://github.com/dnbexperience/eufemia/commit/010085340a335d3fd90d6eef7a41df37cbcf40e8))
* update dropshadow styles ([f4ea4bf](https://github.com/dnbexperience/eufemia/commit/f4ea4bfe6ba5cddbae7a94c43b5d5952a594c0b0))
* Update shadow on sticky table header ([1c15ecf](https://github.com/dnbexperience/eufemia/commit/1c15ecfbbf8e7f550ffc3d1e60d1d121dda416c4))
* use id when setting data-dnb-modal-active ([3934e1d](https://github.com/dnbexperience/eufemia/commit/3934e1d2ecbaabbdcbecd4ab847980cd11dc9e55))
* warning message when running tests for DatePicker ([77f5e22](https://github.com/dnbexperience/eufemia/commit/77f5e2291ea8f09cbe4e001aafa4582b9bbb37e1))
* **build:** fix css minify and file naming of sass to css ([bba0f50](https://github.com/dnbexperience/eufemia/commit/bba0f50bbc916f56b242d260beaf6ce9d44b7db3))
* use keyboard tab key to jump to anchors inside Autocomplete ([558d10f](https://github.com/dnbexperience/eufemia/commit/558d10f27358b9f6f75d6f9265b53ae968154038))
* **Autocomplete:** click on "show all" will should keep focus on input ([a4ce709](https://github.com/dnbexperience/eufemia/commit/a4ce709327a60d17b4f0d8f66014cb274ee24496))


### Features

* add sea-green and fire-red-8 to Section component ([c0d3797](https://github.com/dnbexperience/eufemia/commit/c0d3797918afd4914ca1f8f79c859864b64db18d))
* FormStatus's cursor will be inherit when used in a button ([2a3fcb4](https://github.com/dnbexperience/eufemia/commit/2a3fcb40b76e8132c45e0e3eff0e551ec2df9850))