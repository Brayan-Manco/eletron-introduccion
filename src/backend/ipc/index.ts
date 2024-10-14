import { setupCategoryHandlers } from "./categoryHandlers";
import { setupProductHandlers } from "./productHandlers";
import { setupUserHandlers } from "./userHandlers";


export function setupIpcHandlers() {
  setupUserHandlers();
  setupProductHandlers();
  setupCategoryHandlers();
}
