import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

/**
 * Function to show notifications (toasts)
 *
 * @param message - Notification text
 * @param type - Type of notification (success, error, warning)
 * @param classname - Additional class for styling
 */
export function toast(
  message: string = '',
  type: 'success' | 'error' | 'warning',
  classname: string = '',
): void {

  // Determine classes and text depending on the type
  let classList: string = '';
  let text: string = '';

  switch (type) {

    case 'success':
      classList = 'border-green-200 bg-green-100';
      text = `✅ ${message}`;
      break;

    case 'warning':
      classList = 'border-orange-200 bg-orange-100';
      text = `🚧 ${message}`;
      break;

    case 'error':
      classList = 'border-red-200 bg-red-100';
      text = `⛔️ ${message}`;
      break;

    default:
      break;
  }

  // Show the notification using the Toastify library
  Toastify({
    text: text,
    className: `bg-none shadow-none text-black border ${classList} ${classname}`,
    duration: 3000,
    gravity: 'bottom',
    position: 'center',
  }).showToast();
}