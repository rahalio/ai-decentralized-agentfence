/**
 * Audits Domain Facade
 *
 * High-level API for audits domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { auditsService } from "./audits.service";
// TODO: Import types
// import type { ... } from "./audits.api-types";

/**
 * Audits Facade
 *
 * High-level API for audits operations.
 * Components should use this facade instead of services directly.
 */
export const auditsFacade = {
  /**
   * List audit events
   */
  async getEvent(...args: Parameters<typeof auditsService.getEvent>): Promise<any> {
    return auditsService.getEvent(...args);
  },

  /**
   * Append an audit event (PEP / runtime)
   */
  async getEvent(...args: Parameters<typeof auditsService.getEvent>): Promise<any> {
    return auditsService.getEvent(...args);
  },

  /**
   * Get audit event
   */
  async getEvent(...args: Parameters<typeof auditsService.getEvent>): Promise<any> {
    return auditsService.getEvent(...args);
  },

  /**
   * Verify tamper-evident hash chain for an agent tree
   */
  async getVerifyChain(...args: Parameters<typeof auditsService.getVerifyChain>): Promise<any> {
    return auditsService.getVerifyChain(...args);
  }
};
