
import { checkStatus, checkInventory } from './grocer';

export function isServiceOnline() {
  return checkStatus((status) => status === 'ONLINE');
}

export function pickFruit(variety, quantity, callback) {
  return checkInventory({variety, quantity}, callback);
}

export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err !== null) {
    throw new Error('err');
  }
  else {
    if (isAvailable != 0) {
      return 'PURCHASE';
    } else {
      return 'NOOP';
    }
  }
}

export function pickAndPurchaseFruit(variety, quantity) {
  return pickFruit(variety, quantity, purchaseInventoryIfAvailable);
}
