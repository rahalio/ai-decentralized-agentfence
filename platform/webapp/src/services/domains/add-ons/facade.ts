/**
 * AddOns Domain Facade
 *
 * High-level API for add-ons domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { addOnsService } from "./add-ons.service";
// TODO: Import types
// import type { ... } from "./add-ons.api-types";

/**
 * AddOns Facade
 *
 * High-level API for add-ons operations.
 * Components should use this facade instead of services directly.
 */
export const addOnsFacade = {
  /**
   * List add-on packages
   */
  async getAddOn(...args: Parameters<typeof addOnsService.getAddOn>): Promise<any> {
    return addOnsService.getAddOn(...args);
  },

  /**
   * Submit add-on for attestation review
   */
  async createAddOn(...args: Parameters<typeof addOnsService.createAddOn>): Promise<any> {
    return addOnsService.createAddOn(...args);
  },

  /**
   * Get add-on package
   */
  async getAddOn(...args: Parameters<typeof addOnsService.getAddOn>): Promise<any> {
    return addOnsService.getAddOn(...args);
  },

  /**
   * Approve and allowlist add-on
   */
  async createApprove(...args: Parameters<typeof addOnsService.createApprove>): Promise<any> {
    return addOnsService.createApprove(...args);
  },

  /**
   * Revoke allowlist status
   */
  async getRevoke(...args: Parameters<typeof addOnsService.getRevoke>): Promise<any> {
    return addOnsService.getRevoke(...args);
  },

  /**
   * Force unload add-on from agent runtimes
   */
  async getUnload(...args: Parameters<typeof addOnsService.getUnload>): Promise<any> {
    return addOnsService.getUnload(...args);
  }
};
