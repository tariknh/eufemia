import ComponentBox from '../../../../../../../shared/tags/ComponentBox'
import { Form, Field } from '@dnb/eufemia/src/extensions/forms'
import { Layout } from '@dnb/eufemia/src'

export const Default = () => {
  return (
    <ComponentBox scope={{ Form, Field }}>
      <Form.Handler
        data={{ email: null }}
        onSubmit={(event) => console.log('onSubmit', event)}
      >
        <Layout.Card spacing="medium">
          <Field.Email path="/email" />
          <Form.ButtonRow>
            <Form.SubmitButton />
          </Form.ButtonRow>
        </Layout.Card>
      </Form.Handler>
    </ComponentBox>
  )
}