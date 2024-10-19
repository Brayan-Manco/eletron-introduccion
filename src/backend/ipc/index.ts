import { setupCategoryHandlers } from "./categoryHandlers";
import { setupPaymentHandlers } from "./paymentHandlers";
import { setupHandlersPaymentMethod } from "./paymentMethodHandlers";
import { setupProductHandlers } from "./productHandlers";
import { setupSaleDetailsHandlers } from "./saleDeatilsHandlers";
import { setupSaleHandler } from "./saleHandlers";
import { setupUserHandlers } from "./userHandlers";


export function setupIpcHandlers() {
  setupUserHandlers();
  setupProductHandlers();
  setupCategoryHandlers();
  setupHandlersPaymentMethod();
  setupSaleHandler();
  setupSaleDetailsHandlers();
  setupPaymentHandlers();
}
