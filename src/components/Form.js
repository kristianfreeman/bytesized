import React from 'react'
export default ({ formId, submitText = 'Submit' }) => (
  <>
    <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
    <form
      action={`https://app.convertkit.com/forms/${formId}/subscriptions`}
      class="seva-form formkit-form"
      method="post"
      data-sv-form={formId}
      data-format="inline"
      data-version="5"
    >
      <input
        class="formkit-input shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline text-xl"
        aria-label="Your first name"
        name="fields[first_name]"
        placeholder="Your first name"
        required
        type="text"
      />
      <input
        class="formkit-input shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline text-xl"
        name="email_address"
        placeholder="Your email address"
        required
        type="email"
      />
      <button
        data-element="submit"
        class="formkit-submit text-white bg-orange-800 hover:bg-orange-600 transition-all font-bold p-4 text-lg rounded"
        type="submit"
      >
        <span>{submitText}</span>
      </button>
    </form>
  </>
)
