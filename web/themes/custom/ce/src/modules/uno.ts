import { adoptStyles } from '~/api/styles'
import { reset } from '~/api/uno'
import 'uno.css'

/**
 * Apply css reset.
 */
adoptStyles(document, [reset], 'reset')
