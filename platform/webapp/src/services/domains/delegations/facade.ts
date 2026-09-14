/**
 * Delegations Domain Facade
 *
 * High-level API for delegations domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { delegationsService } from "./delegations.service";
// TODO: Import types
// import type { ... } from "./delegations.api-types";

/**
 * Delegations Facade
 *
 * High-level API for delegations operations.
 * Components should use this facade instead of services directly.
 */
export const delegationsFacade = {
  /**
   * List delegation edges
   */
  async getDelegation(...args: Parameters<typeof delegationsService.getDelegation>): Promise<any> {
    return delegationsService.getDelegation(...args);
  },

  /**
   * Record parent→child delegation (spawn)
   */
  async createDelegation(...args: Parameters<typeof delegationsService.createDelegation>): Promise<any> {
    return delegationsService.createDelegation(...args);
  },

  /**
   * Get delegation graph rooted at an agent
   */
  async getGraph(...args: Parameters<typeof delegationsService.getGraph>): Promise<any> {
    return delegationsService.getGraph(...args);
  },

  /**
   * Get delegation edge
   */
  async getDelegation(...args: Parameters<typeof delegationsService.getDelegation>): Promise<any> {
    return delegationsService.getDelegation(...args);
  },

  /**
   * Preview inherited spend/depth/audit context
   */
  async getInheritance(...args: Parameters<typeof delegationsService.getInheritance>): Promise<any> {
    return delegationsService.getInheritance(...args);
  }
};
