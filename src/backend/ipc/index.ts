import { setupCategoryHandlers } from "./categoryHandlers";
import { setupHandlersPaymentMethod } from "./paymentMethodHandlers";
import { setupProductHandlers } from "./productHandlers";
import { setupUserHandlers } from "./userHandlers";


export function setupIpcHandlers() {
  setupUserHandlers();
  setupProductHandlers();
  setupCategoryHandlers();
  setupHandlersPaymentMethod();
}
