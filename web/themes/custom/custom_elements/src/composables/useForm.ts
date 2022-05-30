import { getCurrentInstance, onMounted, onUnmounted, Ref, ref } from 'vue'
import { CustomComponentInternalInstance } from '~/api/ApiCustomElements'

type UeInput = HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement | HTMLSelectElement | undefined

export const useForm = (el: Ref<UeInput>) => {
  const instance = getCurrentInstance() as CustomComponentInternalInstance
  const host = instance.host
  const form = ref<HTMLFormElement|null>(null)
  const input = ref<HTMLInputElement|null>(null)
  form.value = host.closest('form')

  const options = {
    name: () => el.value?.name,
    value: () => el.value?.value,
    disabled: () => el.value?.disabled ?? false,
    reportValidity: () => typeof el.value?.reportValidity === 'function' ? el.value.reportValidity() : true
  }

  const handleFormData = (event: FormDataEvent) => {
    const disabled = options.disabled()
    const name = options.name()
    const value = options.value()

    if (!disabled && typeof name === 'string' && typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        (value as unknown[]).forEach(val => {
          event.formData.append(name, (val as string | number | boolean).toString());
        })
      } else {
        event.formData.append(name, (value as unknown as string | number | boolean).toString());
      }
    }
  }

  const handleFormSubmit = (event: Event) => {
    const disabled = options.disabled()
    const reportValidity = options.reportValidity()
    if (form.value && !form.value.noValidate && !disabled && !reportValidity) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }



  onMounted(() => {
    if(form.value) {
      form.value.addEventListener('formdata', handleFormData)
      form.value.addEventListener('submit', handleFormSubmit)
    }
  })

  onUnmounted(() => {
    if (form.value) {
      form.value.removeEventListener('formdata', handleFormData)
      form.value.removeEventListener('submit', handleFormSubmit)
      form.value = null
    }
  })

  /** Submits the form, triggering validation and form data injection. */
  const submit = (submitter?: HTMLInputElement | HTMLButtonElement | undefined) => {
    // Calling form.submit() bypasses the submit event and constraint validation. To prevent this, we can inject a
    // native submit button into the form, "click" it, then remove it to simulate a standard form submission.
    if (form.value) {
      const button = document.createElement('button');
      button.type = 'submit';
      button.style.position = 'absolute';
      button.style.width = '0';
      button.style.height = '0';
      button.style.clipPath = 'inset(50%)';
      button.style.overflow = 'hidden';
      button.style.whiteSpace = 'nowrap';

      // Pass form attributes through to the temporary button
      if (submitter) {
        ['formaction', 'formmethod', 'formnovalidate', 'formtarget'].forEach(attr => {
          if (submitter.hasAttribute(attr)) {
            button.setAttribute(attr, submitter.getAttribute(attr)!);
          }
        });
      }

      form.value.append(button);
      button.click();
      button.remove();
    }
  }

  return {
    submit
  }
}
